
import express from "express";
import session from "express-session";
import passport from "./passport/passportLocal.js";


/* --------------------- SERVER --------------------------- */

const app = express()

/* --------------------- MIDDLEWARE --------------------------- */

app.use(
  session({
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

/* --------------------- AUTH --------------------------- */

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
}

/* --------------------- ROUTES --------------------------- */

app.post('/api/register',
  passport.authenticate('register', {
    failureRedirect: '/failregister',
    successRedirect: '/home/',
  })
)


app.post('/api/login',
  passport.authenticate('login', {
    failureRedirect: '/faillogin',
    successRedirect: '/home/',
  })
)


app.get('/api/auth', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user)
  } else {
    res.send('false')
  }
})


/* --------- LOGOUT ---------- */
app.get('/api/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})



/* --------- INICIO ---------- */
// app.get('/', isAuth, (req, res) => {
//   res.redirect('/datos')
// })

// app.get('/home', (req, res) => {
//   console.log('req.isAuthenticated();', req.isAuthenticated())
//   if (req.isAuthenticated()) {
//     res.redirect('/')
//   }
// })



/* --------------------- SOCKET --------------------------- */


// Socket
import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });


// Conexion Socket
import socketConnection from "./socket/socketConnection.js";

io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado!');
    await socketConnection(socket, io)
});






/* --------- LISTEN ---------- */

// const PORT = 8080
// const server = app.listen(PORT, () => {
//   console.log(`Servidor escuchando en el puerto ${PORT}`)
// })
// server.on('error', error => console.log(`Error en servidor: ${error}`))


const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))




