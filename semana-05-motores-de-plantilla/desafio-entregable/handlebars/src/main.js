const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.use(express.urlencoded({ extended: true })) 

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index.hbs'
}))
app.set('views', './views')



app.get('/', (req, res) => {
  res.render('formulario.hbs')
})


const productos = []
app.post('/productos', (req, res) => {
  productos.push(req.body)
  res.redirect('/')
});


app.get('/productos', (req, res) => {
  res.render('historial.hbs', { productos } )
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
