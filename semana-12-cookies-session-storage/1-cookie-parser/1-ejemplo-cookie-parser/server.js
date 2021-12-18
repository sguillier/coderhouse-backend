const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

// Aqui insertamos los metodos para crear y leer las cookies
app.use(cookieParser())

// Para escribir y leer las signed es necesario que cookieParser este declarado de alguna de las siguientes maneras
// app.use(cookieParser('my-secret'))  
// app.use(cookieParser(['my-secret', 'another-secret']))


app.use((req, res, next) => {
  console.dir(req.cookies)
  console.dir(req.signedCookies)
  next()
})


// Solo para verificar que el servidor esta levantado
app.get('/', (req, res) => {
  res.send('Servidor express ok!')
})


// Con este get se crea una cookie llamada 'regular' y su contenido es la palabra 'cookie'
app.get('/set', (req, res) => {
  res.cookie('regular', 'cookie')  //notar que utiliza res.  ya que el endpoint RESPONDE con una cookie que queda en el cliente
  res.send('Mi primera Cookie')
})


// Con este get se crea una cookie llamada 'json', la cual incluye un json
app.get('/setJSON', (req, res) => {
  res.cookie('json', { tipo: 'cookie', nombre: 'cuqui' })
  res.send('Mi primera cookie en formato Json')
})


// Con este get se crea una cookie llamada 'expirable', la cual expira en 30seg
app.get('/setEX', (req, res) => {
  res.cookie('expirable', 'cookie expirable', { maxAge: 30000 })
  res.send('Set Exp Cookie')
})


// Crea cookie 'signed' para que funcione es necesario que cuando se define el cookieParser se incluya una palabra secreta 
// Algo del tipo lo siguiente app.use(cookieParser('my-secret'))
app.get('/setSigned', (req, res) => {
  res.cookie('signed', 'cookie', { signed: true })
  res.send('Set Signed Cookie')
})


// Con esto se leen las cookies anteriores, 'nombre' puede ser igual a 'regular', 'json', etc. todas las que hemos creado
app.get('/get/:nombre', (req, res) => {
  const cookieName = req.params.nombre
  const jsonCookie = req.cookies[cookieName]
  res.json(jsonCookie)
})


// Esto las lista todas, las signed y not signed
app.get('/get', (req, res) => {
  res.json({ notSigned: req.cookies, signed: req.signedCookies })
})


// Eliminamos todas las cookies
app.get('/clr', (req, res) => {
  for (const cookieName of Object.keys(req.cookies)) {
    res.clearCookie(cookieName)
  }
  for (const signedCookieName of Object.keys(req.signedCookies)) {
    res.clearCookie(signedCookieName)
  }
  res.send('Clear Cookies')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
