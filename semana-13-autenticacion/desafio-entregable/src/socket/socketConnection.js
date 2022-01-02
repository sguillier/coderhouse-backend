
import claseMensajes from '../daos/claseMensajes.js'
const mensajes = new claseMensajes()
await mensajes.deleteAllMessages()


import claseProductos from '../daos/claseProductos.js'
// import denormalizeChat from './denormalizeChat.js';
// import normalizeChat from './normalizeChat.js';
const productos = new claseProductos()
// await productos.deleteAllProducts()


export default async function socketConnection(socket, io){
        
    // Productos
    socket.emit('productos', await productos.getAllProducts() );
    socket.on('update-productos', async (e) => {
        await productos.saveProduct(e)
        io.sockets.emit('productos', await productos.getAllProducts() );
    })
    
    
    // Chat
    socket.emit('chat', await mensajes.getAllMessages() );
    socket.on('update-chat', async (e) => {
        await mensajes.saveMessage(e)
        const arrayMensajes = await mensajes.getAllMessages()
        io.sockets.emit('chat', arrayMensajes );
        
        // const chatNormalized = await normalizeChat(arrayMensajes)
        // io.sockets.emit('chat', chatNormalized );
    })
    
}



