// Configuración MQTT
const MQTT_CONFIG = {
    host: 'test.mosquitto.org', // Broker público para pruebas
    port: 8080, // Puerto para WebSocket
    clientId: 'zapatillas-client-' + Math.random().toString(16).substr(2, 8),
    topic: 'zapatillas/pedidos'
};

let mqttClient = null;

// Conectar al broker MQTT
// Modifica la función connectMqtt
function connectMqtt() {
    mqttClient = new Paho.MQTT.Client(
        MQTT_CONFIG.host,
        MQTT_CONFIG.port,
        MQTT_CONFIG.clientId
    );

    mqttClient.onConnectionLost = onConnectionLost;
    
    // Añade esto para depuración
    mqttClient.onMessageArrived = function(message) {
        console.log("Mensaje recibido:", message.payloadString);
    };
    
    mqttClient.connect({
        onSuccess: function() {
            console.log('Conectado a MQTT broker');
            mqttClient.subscribe(MQTT_CONFIG.topic);
        },
        onFailure: function(err) {
            console.error('Error de conexión MQTT:', err.errorMessage);
        },
        useSSL: true,
        reconnect: true
    });
}

function onConnect() {
    console.log('Conectado al broker MQTT');
}

function onConnectionLost(response) {
    console.log('Conexión perdida: ' + response.errorMessage);
    // Intentar reconectar después de 5 segundos
    setTimeout(connectMqtt, 5000);
}

// Enviar mensaje MQTT
function sendMqttMessage(data) {
    if (!mqttClient || !mqttClient.isConnected()) {
        console.error('MQTT no conectado');
        return false;
    }

    try {
        const message = new Paho.MQTT.Message(JSON.stringify(data));
        message.destinationName = MQTT_CONFIG.topic;
        mqttClient.send(message);
        console.log('Mensaje enviado:', data);
        return true;
    } catch (error) {
        console.error('Error enviando mensaje:', error);
        return false;
    }
}

// Iniciar conexión al cargar la página
connectMqtt();

// Guardar en "base de datos" (localStorage)
function saveToDatabase(data) {
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || []);
    pedidos.push({
        ...data,
        fecha: new Date().toISOString()
    });
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    console.log('Pedido guardado:', data);
}

// Exportar funciones
window.mqttHandler = {
    sendMessage: sendMqttMessage,
    saveToDatabase
};