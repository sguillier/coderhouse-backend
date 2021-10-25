const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index' );
});


const productos = []
app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
});

app.get('/productos', (req, res) => {
    res.render('index', { productos });
});


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
