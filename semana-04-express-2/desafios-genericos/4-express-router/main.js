
const express = require('express')
const { Router } = require('express');


/* ------------------------------------------------------ */
/* Mascotas */
const routerMascotas = Router();
const mascotas = [];

routerMascotas.get('/', (req, res) => {
    res.json(mascotas);
});

routerMascotas.post('/', (req, res) => {
    mascotas.push(req.body);
    res.json(req.body);
});


/* ------------------------------------------------------ */
/* Personas */
const routerPersonas = Router();
const Personas = [];

routerPersonas.get('/', (req, res) => {
    res.json(Personas);
});

routerPersonas.post('/', (req, res) => {
    Personas.push(req.body);
    res.json(req.body);
});


/* ------------------------------------------------------ */
/* Cargo los routers */
const app = express()
app.use(express.json())

app.use('/api/mascotas', routerMascotas)
app.use('/api/personas', routerPersonas)


/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
