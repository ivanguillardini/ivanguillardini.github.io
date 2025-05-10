document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const buyBtn = document.getElementById('buy-btn');
    const returnBtn = document.getElementById('return-btn');
    const modelSpan = document.getElementById('summary-model');
    const sizeSpan = document.getElementById('summary-size');
    const colorSpan = document.getElementById('summary-color');
    const priceSpan = document.getElementById('summary-price');
    const statusElement = document.getElementById('transaction-status');

    // Cargar selección anterior
    const seleccion = JSON.parse(localStorage.getItem('ultimaSeleccion')) || {
        modelo: 'Runner Pro',
        talla: '40',
        colorName: 'Negro',
        precio: 89.99
    };

    // Mostrar resumen
    modelSpan.textContent = seleccion.modelo;
    sizeSpan.textContent = seleccion.talla;
    colorSpan.textContent = seleccion.colorName;
    priceSpan.textContent = `$${seleccion.precio.toFixed(2)}`;

    // Función para procesar transacción
    async function processDecision(decision) {
        const transactionData = {
            ...seleccion,
            accion: decision,
            fecha: new Date().toISOString()
        };

        // Deshabilitar botones durante el envío
        buyBtn.disabled = true;
        returnBtn.disabled = true;
        statusElement.textContent = `Procesando ${decision === 'compra' ? 'compra' : 'devolución'}...`;
        statusElement.style.color = '#FFA000';

        try {
            // Intentar enviar por MQTT
            let mqttSuccess = false;
            if (window.mqttHandler.isConnected()) {
                mqttSuccess = window.mqttHandler.sendMessage(transactionData);
            }

            // Guardar en historial (simulación de base de datos)
            const historial = JSON.parse(localStorage.getItem('historialPedidos') || []);
            historial.push(transactionData);
            localStorage.setItem('historialPedidos', JSON.stringify(historial));

            // Mostrar resultado
            statusElement.textContent = `¡${decision === 'compra' ? 'Compra' : 'Devolución'} procesada con éxito!`;
            statusElement.style.color = '#4CAF50';
            
            // Redirigir después de 2 segundos
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
            
        } catch (error) {
            console.error('Error:', error);
            statusElement.textContent = `Error al procesar ${decision === 'compra' ? 'compra' : 'devolución'}`;
            statusElement.style.color = '#F44336';
            
            // Rehabilitar botones
            setTimeout(() => {
                buyBtn.disabled = false;
                returnBtn.disabled = false;
                statusElement.textContent = '';
            }, 3000);
        }
    }

    // Event listeners
    buyBtn.addEventListener('click', () => processDecision('compra'));
    returnBtn.addEventListener('click', () => processDecision('devolucion'));
});