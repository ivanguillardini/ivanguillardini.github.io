// Configuración MQTT para GitHub Pages
const MQTT_CONFIG = {
    host: 'wss://test.mosquitto.org:8081/mqtt',
    clientId: 'zapatillas-client-' + Math.random().toString(36).substr(2, 8),
    topic: 'zapatillas/pedidos',
    timeout: 3
};

let mqttClient = null;
let isConnected = false;

function connectMqtt() {
    mqttClient = new Paho.MQTT.Client(
        MQTT_CONFIG.host,
        MQTT_CONFIG.clientId
    );

    mqttClient.onConnectionLost = (response) => {
        console.log('Conexión MQTT perdida:', response.errorMessage);
        isConnected = false;
        updateMqttStatus();
        setTimeout(connectMqtt, 5000);
    };

    mqttClient.onMessageArrived = (message) => {
        console.log('Mensaje recibido:', message.payloadString);
    };

    const options = {
        timeout: MQTT_CONFIG.timeout,
        useSSL: true,
        onSuccess: () => {
            console.log('Conectado a broker MQTT');
            isConnected = true;
            updateMqttStatus();
            mqttClient.subscribe(MQTT_CONFIG.topic);
        },
        onFailure: (error) => {
            console.error('Error de conexión MQTT:', error.errorMessage);
            isConnected = false;
            updateMqttStatus();
        }
    };

    mqttClient.connect(options);
}

function updateMqttStatus() {
    const statusElement = document.getElementById('mqtt-status');
    if (statusElement) {
        statusElement.textContent = isConnected ? 'Conectado a MQTT' : 'Error de conexión MQTT';
        statusElement.style.color = isConnected ? '#4CAF50' : '#F44336';
    }
}

function sendMqttMessage(data) {
    if (!isConnected || !mqttClient) {
        console.error('MQTT no conectado');
        return false;
    }

    try {
        const message = new Paho.MQTT.Message(JSON.stringify(data));
        message.destinationName = MQTT_CONFIG.topic;
        message.qos = 1; // Calidad de servicio nivel 1
        mqttClient.send(message);
        console.log('Mensaje MQTT enviado:', data);
        return true;
    } catch (error) {
        console.error('Error enviando mensaje MQTT:', error);
        return false;
    }
}

// Iniciar conexión cuando se carga la página
window.addEventListener('load', () => {
    connectMqtt();
    updateMqttStatus();
});

// Exportar funciones para uso global
window.mqttHandler = {
    sendMessage: sendMqttMessage,
    isConnected: () => isConnected
};