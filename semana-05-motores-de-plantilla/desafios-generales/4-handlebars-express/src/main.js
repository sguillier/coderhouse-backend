const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index.hbs'
}))

app.set('views', './views')

app.get('/', (req, res) => {
  res.render('datos.hbs', {
    nombre: 'Sebastian',
    apellido: 'Guillier',
    edad: 39,
    email: 'seba@correo.com',
    telefono: '12345678'
  })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
