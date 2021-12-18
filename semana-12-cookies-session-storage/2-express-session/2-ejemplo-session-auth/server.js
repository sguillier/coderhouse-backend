const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: true,
  saveUninitialized: true
}))


// Para ingresar el usuario y contraseña usar thunderClient ejecutar el get en: 
// localhost:8080/login?username=pepe&password=pepepass
app.get('/login', (req, res) => {
  const { username, password } = req.query

  if (username !== 'pepe' || password !== 'pepepass') {
    return res.send('login failed')
  }

  req.session.user = username
  req.session.admin = true
  res.send('login success!')
})


// Escribimos funcion que será utilizada de midelware en el paso siguiente
function funMidelware(req, res, next) {
  if (req.session?.user === 'pepe' && req.session?.admin) {
    return next()
  }
  return res.status(401).send('error de autorización!')
}


app.get('/privado', funMidelware, (req, res) => {
  res.send('si estas viendo esto es porque ya te logueaste!')
})


app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }
  })
})


const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
