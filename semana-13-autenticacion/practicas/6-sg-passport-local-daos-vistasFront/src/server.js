
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local'

import bCrypt from 'bcrypt'


/* ------------------ DATABASE -------------------- */

import claseUsuarios from './daos/claseUsuarios.js'
const usuarios = new claseUsuarios()


/* ------------------ PASSPORT -------------------- */

passport.use(
  'register',
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {

      try {
        const user = await usuarios.getUserById(username)
        if (user) {
          console.log('User already exists')
          return done(null, false)
        }
      } catch (err) {
        console.log('Error in SignUp: ' + err)
        return done(err)
      }

      const newUser = {
        password: createHash(password),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        url: req.body.url,
      }


      try {
        await usuarios.saveUserById(username, newUser)
        const userWithId = { id:username, ...newUser }
        console.log('User Registration succesful')
        console.log(userWithId)
        return done(null, userWithId)
      } catch (err) {
        console.log('Error in Saving user: ' + err)
        return done(err)
      }

    }
  )
)

passport.use(
  'login',
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await usuarios.getUserById(username)

      if (!user) {
        console.log('User Not Found with username ' + username)
        return done(null, false)
      }

      if (!isValidPassword(user, password)) {
        console.log('Invalid Password')
        return done(null, false)
      }

      return done(null, user)


    } catch (err) {
      console.log('Error in Login: ' + err)
      return done(err)
    }

  })
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(async function(id, done) {
  const usuario = await usuarios.getUserById(id)
  done(null, usuario)
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
