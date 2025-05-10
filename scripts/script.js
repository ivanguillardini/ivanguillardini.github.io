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
            
            // Cambiar color de la imagen (efecto visual)
            productImg.style.filter = `drop-shadow(0 5px 10px ${selectedColorHex})`;
        });
    });

    sendBtn.addEventListener('click', function() {
        const selectionData = {
            modelo: 'Runner Pro',
            talla: selectedSize,
            color: selectedColor,
            colorName: selectedColorName,
            precio: 89.99,
            accion: 'seleccion'
        };

        // Enviar por MQTT
        const mqttSuccess = window.mqttHandler.sendMessage(selectionData);
        
        // Guardar en "base de datos" (localStorage)
        window.mqttHandler.saveToDatabase(selectionData);

        if (mqttSuccess) {
            // Guardar selección para la siguiente pantalla
            localStorage.setItem('ultimaSeleccion', JSON.stringify(selectionData));
            
            // Redirigir a pantalla de decisión
            window.location.href = 'decision.html';
        } else {
            alert('Error al enviar. Intenta nuevamente.');
        }
    });
});