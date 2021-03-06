const express = require('express')
const app = express()

/* ------------------------------------------------------ */
/* Carga Carpeta Publica */
app.use(express.static('public'))

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))