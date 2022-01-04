
import express from "express";
import session from "express-session";

const sessionMiddleware = session({
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })


/* --------------------- PASSPORT --------------------------- */

import passport from "./passport/passportLocal.js";


/* --------------------- SERVER --------------------------- */

const app = express()

/* --------------------- MIDDLEWARE --------------------------- */

app.use( sessionMiddleware )
  

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


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



/* --------------------- SOCKET --------------------------- */

import socketConnection from "./socket/socketConnection.js";
const httpServer = await socketConnection(app, sessionMiddleware, passport);



/* --------- LISTEN ---------- */

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))


