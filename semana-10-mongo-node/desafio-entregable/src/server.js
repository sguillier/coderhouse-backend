// const express = require('express')
import express from 'express'

import routerProductos from './routers/routerProductos.js'
import routerCarritos from './routers/routerCarritos.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/* ------------------------------------------------------ */
/* Carga Carpeta Publica */
app.use(express.static('public'))


/* ------------------------------------------------------ */
/* Carga routers */
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarritos)


/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
