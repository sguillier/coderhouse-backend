
import express from 'express'
import session from "express-session";
import routerAuth from './routers/routerAuth.js'
import routerCarritos from './routers/routerCarritos.js'
import routerProductos from './routers/routerProductos.js'
import passport from "./negocio/passport/passportLocal.js";



export function crearServidor() {
    const sessionMiddleware = session({
        secret: 'shhhhhhhhhhhhhhhhhhhhh',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000,
        },
    })


    /* --------------------- SERVER --------------------------- */
    const app = express()



    /* --------------------- MIDDLEWARE --------------------------- */
    app.use(sessionMiddleware)

    app.use(passport.initialize())
    app.use(passport.session())

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static('public'))





    /* --------------------- ROUTERS --------------------------- */

    app.use('/api/auth', routerAuth(passport))
    app.use('/api/productos', routerProductos)
    app.use('/api/carritos', routerCarritos)





    /* --------- LISTEN ---------- */
    // const PORT = process.env.PORT || 8080
    // const server = app.listen(PORT, () => {
    //     console.log(`Servidor escuchando en el puerto ${server.address().port}`)
    // })
    // server.on('error', error => console.log(`Error en servidor ${error}`))

    const puerto = process.env.PORT || 8080
    let servidorEscuchando
    const servidor = {
        conectar: () => {
            return new Promise((resolve, reject) => {
                servidorEscuchando = app.listen(puerto, () => {
                    console.log(`Servidor escuchando en el puerto ${servidorEscuchando.address().port}`)
                    resolve()
                })
                servidorEscuchando.on('error', err => {
                    reject(err)
                })
            })
        },
        desconectar: () => {
            return new Promise((resolve, reject) => {
                servidorEscuchando.close(err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            })
        },
    }
    return servidor
}


// const server = crearServidor()
// server.conectar()

