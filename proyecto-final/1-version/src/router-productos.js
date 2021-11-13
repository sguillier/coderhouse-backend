
const { Router } = require('express');
const routerProductos = Router();


const Contenedor = require('./clase-contenedor.js');
const productosTxt = new Contenedor('./src/txt/productos.txt')


routerProductos.get('/', async (req, res) => {
    const arrayProductos = await productosTxt.getAll()
    res.json( arrayProductos )
});


routerProductos.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const producto = await productosTxt.getById(id)
    res.json( producto )
});


routerProductos.post('/', async (req, res) => {
    const nuevoProducto = req.body
    await productosTxt.save(nuevoProducto)
    res.json(nuevoProducto);
});


routerProductos.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const producto = req.body
    await productosTxt.saveById(id, producto)
    res.json(`id:${id} Editado`)
});


routerProductos.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await productosTxt.deleteById(id)
    res.json(`id:${id} Eliminado`)
});


module.exports = routerProductos;


