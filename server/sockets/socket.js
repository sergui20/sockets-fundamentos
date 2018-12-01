const io = require('../server');

// Conexion desde el servidor al cliente
io.on('connection', (client)=>{
    console.log('Usuario conectado');

    client.emit('mensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', function(){
        console.log('Usuario desconectado')
    });

    // Esuchar al cliente
    client.on('mensaje', (data, callback)=>{
        console.log(data)

        client.broadcast.emit('mensaje', data);
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'Todo Belen'
        //     })
        // } else {
        //     callback({
        //         resp: 'Todo mal'
        //     })
        // }
    })
});