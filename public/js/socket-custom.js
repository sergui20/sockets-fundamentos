var socket = io();

// Conexion desde el cliente al servidor
// on es para esuchar eventos. Aqui simplemente esuchamos conexiones y desconexiones
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Servidor desconectado');
});

// emit es para enviar informacion
socket.emit('mensaje', {
    usuario: 'Sergui',
    mensaje: 'Hola Mundo !'
}, function(resp){ // Funcion a ejecutarse cuando este mensaje emitido es recibido por el servidor
    console.log('Respuesta Servidor: ', resp)
});

socket.on('mensaje', (mensaje)=>{
    console.log('Servidor envia: ', mensaje)
});