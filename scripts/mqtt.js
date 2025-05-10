// scripts/mqtt.js
const connectMqtt = () => {
  const brokerUrl = 'wss://test.mosquitto.org:8081'; // WebSocket seguro
  const options = {
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    clean: true,
  };

  const client = mqtt.connect(brokerUrl, options);

  client.on('connect', () => {
    console.log("✅ Conectado al broker MQTT");
    // Actualiza la UI o notifica a otros componentes
    if (window.updateConnectionStatus) {
      window.updateConnectionStatus(true); // Función global (opcional)
    }
  });

  client.on('error', (err) => {
    console.error("❌ Error MQTT:", err);
    if (window.updateConnectionStatus) {
      window.updateConnectionStatus(false);
    }
  });

  return client; // Para usarlo en otros archivos (ej: decision.js)
};

// Hacer la función accesible globalmente (si es necesario)
window.connectMqtt = connectMqtt;