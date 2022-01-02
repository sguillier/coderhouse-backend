
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local'



/* ------------------ DATABASE -------------------- */

const usuarios = []

/* ------------------ PASSPORT -------------------- */

passport.use(
  'register',
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      
      const usuario = usuarios.find(usuario => usuario.username == username)
      if (usuario) {
        console.log('already registered')
        return done(null, false)
      }

      const user = {
        id: `${Date.now()}`,
        username: username,
        password: password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        url: req.body.url,
      }
      usuarios.push(user)

      return done(null, user)
    }
  )
)

passport.use(
  'login',
  new LocalStrategy((username, password, done) => {
    const user = usuarios.find(usuario => usuario.username == username)

    if (!user) {
      return done(null, false)
    }

    if (user.password != password) {
      return done(null, false)
    }

    user.contador = 0

    return done(null, user)
  })
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  const usuario = usuarios.find(usuario => usuario.id == id)
  done(null, usuario)
})

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
    successRedirect: '/',
  })
)


app.post('/api/login',
  passport.authenticate('login', {
    failureRedirect: '/faillogin',
    successRedirect: '/',
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


/* --------- LISTEN ---------- */
const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))
