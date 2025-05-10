// Configuración MQTT
const MQTT_CONFIG = {
    host: 'test.mosquitto.org', // Broker público para pruebas
    port: 8080, // Puerto WebSocket
    clientId: 'zapatillas-client-' + Math.random().toString(16).substr(2, 8),
    topicSelections: 'zapatillas/selecciones',
    topicTransactions: 'zapatillas/transacciones'
};

let mqttClient = null;

// Conectar al broker MQTT
function connectMqtt() {
    mqttClient = new Paho.MQTT.Client(
        MQTT_CONFIG.host,
        MQTT_CONFIG.port,
        MQTT_CONFIG.clientId
    );

    mqttClient.onConnectionLost = onConnectionLost;
    mqttClient.connect({
        onSuccess: onConnect,
        useSSL: true,
        reconnect: true
    });
}

function onConnect() {
    console.log('Conectado al broker MQTT');
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log('Conexión MQTT perdida:', responseObject.errorMessage);
        // Intentar reconectar después de 5 segundos
        setTimeout(connectMqtt, 5000);
    }
}

// Enviar selección de producto
function sendSelection(selectionData) {
    if (!mqttClient || !mqttClient.isConnected()) {
        console.error('Cliente MQTT no conectado');
        return false;
    }

    try {
        const message = new Paho.MQTT.Message(JSON.stringify(selectionData));
        message.destinationName = MQTT_CONFIG.topicSelections;
        mqttClient.send(message);
        console.log('Selección enviada:', selectionData);
        return true;
    } catch (error) {
        console.error('Error enviando selección:', error);
        return false;
    }
}

// Enviar transacción (compra/devolución)
function sendTransaction(transactionData) {
    if (!mqttClient || !mqttClient.isConnected()) {
        console.error('Cliente MQTT no conectado');
        return false;
    }

    try {
        const message = new Paho.MQTT.Message(JSON.stringify(transactionData));
        message.destinationName = MQTT_CONFIG.topicTransactions;
        mqttClient.send(message);
        console.log('Transacción enviada:', transactionData);
        return true;
    } catch (error) {
        console.error('Error enviando transacción:', error);
        return false;
    }
}

// Inicializar conexión al cargar la página
document.addEventListener('DOMContentLoaded', connectMqtt);

// Exportar funciones para uso global
window.mqttHandler = {
    sendSelection,
    sendTransaction
};