
// Express
import express from "express";
const app = express();


// Socket
import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });


// SQL-Chat
import ClienteSqlChat from './sqlChat.js'
import { optionsChat } from './options/optionsChat.js'
const sqlChat = new ClienteSqlChat(optionsChat, 'chat')
// await sqlChat.crearTabla()


// SQL-Productos
import ClienteSqlProductos from './sqlProductos.js'
import { optionsProductos } from './options/optionsProductos.js'
const sqlProductos = new ClienteSqlProductos(optionsProductos, 'productos')
await sqlProductos.crearTabla()


//--------------------------------------------
// configuracion del socket

io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado!');


    // Productos
    socket.emit('productos', await sqlProductos.getItems() );
    socket.on('update-productos', async (e) => {
        await sqlProductos.pushItems([e])
        io.sockets.emit('productos', await sqlProductos.getItems() );
    })


    // Chat
    socket.emit('chat', await sqlChat.getItems() );
    socket.on('update-chat', async (e) => {
        await sqlChat.pushItems([e])
        io.sockets.emit('chat', await sqlChat.getItems() );
    })


});



//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))



//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
