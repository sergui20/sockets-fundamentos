const express = require('express');
const app = express();
const server = require('http').Server(app);

module.exports = require('socket.io')(server); // Comunicacion con el backend
require('./sockets/socket');

const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});