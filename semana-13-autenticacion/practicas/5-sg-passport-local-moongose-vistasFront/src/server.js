
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local'

import bCrypt from 'bcrypt'
import mongoose from 'mongoose'


/* ------------------ DATABASE -------------------- */

// const usuarios = []

// Definición del esquema de documento
const Schema = mongoose.Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  url: { type: String, required: false },
})

// Definicion del modelo
const User = mongoose.model('Users', userSchema)

// Conexión a la base de datos : passport
await mongoose.connect('mongodb://localhost/passport', {
  serverSelectionTimeoutMS: 5000,
})

console.log('Base de datos conectada')



/* ------------------ PASSPORT -------------------- */

passport.use(
  'register',
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {

      User.findOne({ username: username }, function (err, user) {
        if (err) {
          console.log('Error in SignUp: ' + err)
          return done(err)
        }

        if (user) {
          console.log('User already exists')
          return done(null, false)
        }

        const newUser = {
          username: username,
          password:  createHash(password),
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          url: req.body.url,
        }

        User.create(newUser, (err, userWithId) => {
          if (err) {
            console.log('Error in Saving user: ' + err)
            return done(err)
          }
          console.log(user)
          console.log('User Registration succesful')
          return done(null, userWithId)
        })
      })

    }
  )
)

passport.use(
  'login',
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err)

      if (!user) {
        console.log('User Not Found with username ' + username)
        return done(null, false)
      }

      if (!isValidPassword(user, password)) {
        console.log('Invalid Password')
        return done(null, false)
      }

      return done(null, user)
    })
  })
)

passport.serializeUser(function (user, done) {
  // done(null, user.id)
  done(null, user._id)

})

passport.deserializeUser(function (id, done) {
  // const usuario = usuarios.find(usuario => usuario.id == id)
  // done(null, usuario)

  User.findById(id, done)
})


function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password)
}

function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
}

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
