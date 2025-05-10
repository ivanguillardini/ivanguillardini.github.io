# Tienda de Zapatillas con Chat y MQTT

Tienda online de zapatillas deportivas con sistema de pedidos, chat de soporte en tiempo real y envío de pedidos via MQTT.

## Características

- Catálogo de productos con selección de talla y color
- Carrito de compras funcional
- Formulario de pedido con opción de compra/devolución
- Chat de soporte integrado
- Envío de pedidos a broker MQTT
- Almacenamiento local de pedidos como backup
- Diseño responsive

## Tecnologías

- Frontend:
  - HTML5, CSS3, JavaScript
  - Paho MQTT para conexión con broker
  - WebSocket para chat (simulado en GitHub Pages)

- Backend (para desarrollo local):
  - Node.js con Express
  - WebSocket para comunicación en tiempo real
  - SQLite (LibSQL) para base de datos

## Configuración

### GitHub Pages

1. Sube todos los archivos excepto la carpeta `server/`
2. Asegúrate de que las rutas de los archivos sean correctas

### Desarrollo Local

1. Instala las dependencias:
```bash
npm install express ws @libsql/client