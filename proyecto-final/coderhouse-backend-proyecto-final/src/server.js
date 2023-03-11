
import express from 'express'
import session from "express-session";

import routerAuth from './routers/routerAuth.js'
import routerOrdenes from './routers/routerOrdenes.js'
import routerProductos from './routers/routerProductos.js'
import socketConnection from "./socket/socketConnection.js";


const sessionMiddleware = session({
    secret: 'shhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
    },
})




/* --------------------- PASSPORT --------------------------- */
import passport from "./negocio/passport/passportLocal.js";




/* --------------------- SERVER --------------------------- */
const app = express()




/* --------------------- MIDDLEWARE --------------------------- */
app.use( sessionMiddleware )

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))





/* --------------------- ROUTERS --------------------------- */

app.use('/api/auth', routerAuth(passport))
app.use('/api/productos', routerProductos)
app.use('/api/ordenes', routerOrdenes)





/* --------------------- SOCKET --------------------------- */
const httpServer = await socketConnection(app, sessionMiddleware, passport);





/* --------- LISTEN ---------- */
const PORT = process.env.PORT || 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))

