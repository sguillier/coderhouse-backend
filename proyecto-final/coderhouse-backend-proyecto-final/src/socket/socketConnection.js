

/* --------------------- DATABASE --------------------------- */

// Mensajes
import claseMensajes from '../persistencia/daos/claseMensajes.js'
const mensajes = new claseMensajes()
// await mensajes.deleteAllMessages()


// Usuarios
import claseUsuarios from '../persistencia/daos/claseUsuarios.js'
const usuarios = new claseUsuarios()



/* --------------------- SOCKET CONNECTION --------------------------- */

import { createServer } from 'http';
import { Server } from 'socket.io';


export default async function socketConnection(app, sessionMiddleware) {

    // Iniciamos el servidor http a partir de la aplicación express
    const httpServer = createServer(app);
    const io = new Server(httpServer, { cors: { origin: '*' } });


    // Rutilizamos el middleware de session para que se pueda usar en socket.io
    io.use((socket, next) => {
        sessionMiddleware(socket.request, {}, next);
    })


    io.on('connection', async (socket) => {
        console.log('Nuevo cliente conectado!');
        
        // Chat
        socket.emit('chat', await mensajes.getAllMessages());
        socket.on('update-chat', async (mensaje) => {

            // Verificamos que usuario este logueado y tomamos sus datos
            if(socket.request.session.passport){
                const userId = socket.request.session.passport.user;
                const user = await usuarios.getUserById(userId)
                
                // Eliminamos la claveValor password para no enviarla al front
                delete user.password
                const mensajeConUsuario = {...mensaje, user}
                
                // Guardamos Mensaje y Republicamos Mensajes
                await mensajes.saveMessage(mensajeConUsuario)
                const arrayMensajes = await mensajes.getAllMessages()
                io.sockets.emit('chat', arrayMensajes);
    
            }else{
                console.log("Para enviar mensajes el usuario debe estar logueado")
            }
        })
    });


    return httpServer
}

