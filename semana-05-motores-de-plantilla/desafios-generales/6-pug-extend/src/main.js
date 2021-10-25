const express = require('express')

const app = express()

app.set('views', './views');
app.set('view engine', 'pug');

// Los datos query params se entregan como
// http://localhost:8080/datos?min=1&max=10&nivel=5

app.get('/datos', (req, res) => {
    res.render('nivel', req.query);
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))