
// Clase contenedor para los mensajes
const Contenedor = require('./clase-contenedor.js');
const chatTxt = new Contenedor('./src/chat.txt')


const express = require('express')
const app = express()


const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const productos = []
// const chat = []


//--------------------------------------------
// configuracion del socket

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');


    // Productos
    socket.emit('productos', productos);
    socket.on('update-productos', e => {
        productos.push(e)
        io.sockets.emit('productos', productos);
    })


    // Chat
    socket.emit('chat', await chatTxt.getAll());
    socket.on('update-chat', async e => {
        await chatTxt.save(e)
        io.sockets.emit('chat', await chatTxt.getAll());
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
