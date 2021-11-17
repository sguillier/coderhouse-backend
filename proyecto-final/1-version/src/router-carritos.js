
const { Router } = require('express');
const routerCarritos = Router();


const Contenedor = require('./clase-contenedor.js');
const carritosTxt = new Contenedor('./src/txt/carritos.txt')


routerCarritos.post('/', async (req, res) => {
    const nuevoCarrito = req.body
    await carritosTxt.save(nuevoCarrito)
    res.json(nuevoCarrito);
});


routerCarritos.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await carritosTxt.deleteById(id)
    res.json(`id:${id} Eliminado`)
});


routerCarritos.get('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = await carritosTxt.getById(id)
    const productos = carrito.productos
    res.json( productos )
});


routerCarritos.post('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    const newProductos = req.body

    const carrito = await carritosTxt.getById(id)
    carrito.productos.push(newProductos)
    await carritosTxt.saveById(id, carrito)
    res.json(`id:${id} Editado`)
});



routerCarritos.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = parseInt(req.params.id)
    const id_prod = parseInt(req.params.id_prod)

    let carrito = await carritosTxt.getById(id)
    
    const newProductos = carrito.productos.filter(e => e.id !== id_prod)
    carrito.productos = newProductos

    await carritosTxt.saveById(id, carrito)
    res.json(`Producto id:${id_prod} eliminado de carrito id:${id}`)
});




// Los siguientes end point no fueron solicitados en la consigna, pero me fueron utiles para armar el front
routerCarritos.get('/', async (req, res) => {
    const arrayCarritos = await carritosTxt.getAll()
    res.json( arrayCarritos )
});

routerCarritos.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = await carritosTxt.getById(id)
    res.json( carrito )
});

routerCarritos.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = req.body
    await carritosTxt.saveById(id, carrito)
    res.json(`id:${id} Editado`)
});


module.exports = routerCarritos;


