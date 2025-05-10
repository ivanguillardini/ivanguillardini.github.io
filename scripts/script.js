document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const sizeButtons = document.querySelectorAll('.size-options button');
    const colorButtons = document.querySelectorAll('.color-options button');
    const colorText = document.getElementById('color-text');
    const sendBtn = document.getElementById('send-btn');
    const productImg = document.getElementById('product-img');

    // Datos seleccionados
    let selectedSize = '40';
    let selectedColor = 'black';
    let selectedColorName = 'Negro';
    let selectedColorHex = '#333333';

    // Mapeo de nombres de color
    const colorNames = {
        'black': 'Negro',
        'white': 'Blanco',
        'red': 'Rojo',
        'blue': 'Azul'
    };

    // Event listeners
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedSize = this.dataset.size;
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            colorButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            selectedColor = this.dataset.color;
            selectedColorHex = this.dataset.hex;
            selectedColorName = colorNames[selectedColor];
            colorText.textContent = `Color seleccionado: ${selectedColorName}`;
            productImg.style.filter = `drop-shadow(0 5px 10px ${selectedColorHex})`;
        });
    });

    sendBtn.addEventListener('click', async function() {
        const selectionData = {
            modelo: 'Runner Pro',
            talla: selectedSize,
            color: selectedColor,
            colorName: selectedColorName,
            precio: 89.99,
            timestamp: new Date().toISOString(),
            source: 'github-pages'
        };

        // Mostrar estado de envío
        sendBtn.disabled = true;
        sendBtn.textContent = 'Enviando...';
        
        try {
            // Intentar enviar por MQTT
            let mqttSuccess = false;
            if (window.mqttHandler.isConnected()) {
                mqttSuccess = window.mqttHandler.sendMessage(selectionData);
            }
            
            // Guardar en localStorage como fallback
            localStorage.setItem('ultimaSeleccion', JSON.stringify(selectionData));
            
            // Redirigir después de 1 segundo (para dar feedback visual)
            setTimeout(() => {
                window.location.href = 'decision.html';
            }, 1000);
            
        } catch (error) {
            console.error('Error:', error);
            sendBtn.textContent = 'Error al enviar';
            setTimeout(() => {
                sendBtn.textContent = 'Enviar Selección';
                sendBtn.disabled = false;
            }, 2000);
        }
    });
});