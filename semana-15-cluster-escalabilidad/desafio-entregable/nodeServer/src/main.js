import express from "express";
import session from "express-session";
import passport from "./passport/passportLocal.js";
import routerAuth from './routers/auth.js'
import routerRandoms from './routers/randoms.js'
import routerInfo from './routers/info.js'
import socketConnection from "./socket/socketConnection.js";




export default async function main() {

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
  app.use('/api/randoms', routerRandoms)
  // app.use('/info', routerInfo)


  /* --------------------- SOCKET --------------------------- */

  const httpServer = await socketConnection(app, sessionMiddleware);



  /* --------- LISTEN ---------- */

  // const PORT = 8080
  const PORT = parseInt(process.argv[2]) || 8080
  const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
  })
  connectedServer.on('error', error => console.log(`Error en servidor ${error}`))

}
