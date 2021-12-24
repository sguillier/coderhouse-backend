
// Express
import express from "express";
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




// Socket
import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });



//--------------------------------------------
// Conexion Socket
import socketConnection from "./socket/socketConnection.js";

io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado!');
    await socketConnection(socket, io)
});



//--------------------------------------------
// Session
// import session from 'express-session'
// import MongoStore from 'connect-mongo'
// app.use(session({
//     store: MongoStore.create({ mongoUrl: 'mongodb://localhost/sesiones' }),
//     secret: 'entregaSemana12',
//     resave: false,
//     saveUninitialized: false,
//     /* cookie: {maxAge: 40000 } */
// }))




//--------------------------------------------
// Session
import Sesiones from "./utils/sesiones.js";
Sesiones(app)





//--------------------------------------------
// Rutas test y publicas
import routerProductosTest from './routers/routerProductosTest.js'

app.use('/api/productos-test', routerProductosTest)
app.use(express.static('public'))




//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
