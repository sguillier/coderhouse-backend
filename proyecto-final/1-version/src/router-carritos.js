
const { Router } = require('express');
const routerCarritos = Router();


const Contenedor = require('./clase-contenedor.js');
const carritosTxt = new Contenedor('./src/txt/carritos.txt')



routerCarritos.get('/', async (req, res) => {
    const arrayCarritos = await carritosTxt.getAll()
    res.json( arrayCarritos )
});


routerCarritos.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = await carritosTxt.getById(id)
    res.json( carrito )
});


routerCarritos.post('/', async (req, res) => {
    const nuevoCarrito = req.body
    await carritosTxt.save(nuevoCarrito)
    res.json(nuevoCarrito);
});


routerCarritos.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = req.body
    await carritosTxt.saveById(id, carrito)
    res.json(`id:${id} Editado`)
});


routerCarritos.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await carritosTxt.deleteById(id)
    res.json(`id:${id} Eliminado`)
});




module.exports = routerCarritos;


