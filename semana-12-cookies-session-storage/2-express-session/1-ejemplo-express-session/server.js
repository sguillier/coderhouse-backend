const express = require('express')
const session = require('express-session')

const app = express()


// Al igual que con las cookies, aqui configuramos e inicializamos los metodos de 'express-session'
app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false
}))


// Respuesta todo Ok
app.get('/', (req, res) => {
  res.send('Servidor express ok!')
})


// Esto no utiliza todavia 'express-session' 
let contador = 0
app.get('/sin-session', (req, res) => {
  res.json({ contador: ++contador })
})


// Aqui inicializamos la variable req.session.contador, 
// Es como inicializar la session, si existe req.session.contador es por que ya esta inicializada
// Notar que envia una cookie cuando se inicializa, la cookie obviamente va encriptada
app.get('/con-session', (req, res) => {
  showSession(req)
  if (!req.session.contador) {
    req.session.contador = 1
    res.send('Bienvenido!')
  } else {
    req.session.contador++
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
  }
})


// Aqui eliminamos la session, la damos de baja
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }
  })
})


//Mostramos informacion de la session en la consola del servidor
app.get('/info', (req, res) => {
  showSession(req)
  res.send('Send info ok!')
})


const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})


function showSession(req) {
  console.log('-----------------------------------------------------------------------------------------')
  console.log('------------ req.session -------------')
  console.log(req.session)

  console.log('----------- req.sessionID ------------')
  console.log(req.sessionID)

  console.log('----------- req.cookies ------------')
  console.log(req.cookies)

  console.log('---------- req.sessionStore ----------')
  console.log(req.sessionStore)
}

