
const express = require('express')
const app = express()
const PORT = 8080

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index.pug',{mensaje:'Plantilla PUG Usando Express'})
})


const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
