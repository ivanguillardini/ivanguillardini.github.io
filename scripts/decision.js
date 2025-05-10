document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const buyBtn = document.getElementById('buy-btn');
    const returnBtn = document.getElementById('return-btn');
    const modelSpan = document.getElementById('summary-model');
    const sizeSpan = document.getElementById('summary-size');
    const colorSpan = document.getElementById('summary-color');
    const priceSpan = document.getElementById('summary-price');

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

    // Event listeners
    buyBtn.addEventListener('click', function() {
        processDecision('compra');
    });

    returnBtn.addEventListener('click', function() {
        processDecision('devolucion');
    });

    function processDecision(decision) {
        const transactionData = {
            ...seleccion,
            accion: decision,
            fecha: new Date().toISOString()
        };

        // Enviar por MQTT
        const mqttSuccess = window.mqttHandler.sendMessage(transactionData);
        
        // Guardar en "base de datos"
        window.mqttHandler.saveToDatabase(transactionData);

        if (mqttSuccess) {
            alert(`¡${decision === 'compra' ? 'Compra' : 'Devolución'} procesada con éxito!`);
            
            // Opcional: Redirigir a inicio después de 2 segundos
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            alert(`Error al procesar ${decision === 'compra' ? 'compra' : 'devolución'}. Intenta nuevamente.`);
        }
    }
});