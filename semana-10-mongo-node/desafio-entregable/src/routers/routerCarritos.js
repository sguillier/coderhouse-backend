import { Router } from 'express'
const routerCarritos = Router();

import claseCarritos from './../daos/claseCarritos.js'
const carritos = new claseCarritos()


routerCarritos.post('/', async (req, res) => {
    const nuevoCarrito = req.body
    await carritos.saveCarrito(nuevoCarrito)
    res.json(nuevoCarrito);
});


routerCarritos.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await carritos.deleteCarritoById(id)
    res.json(`id:${id} Eliminado`)
});


routerCarritos.get('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = await carritos.getCarritoById(id)
    const productos = carrito.productos
    res.json( productos )
});


routerCarritos.post('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    const newProductos = req.body

    const carrito = await carritos.getCarritoById(id)
    carrito.productos.push(newProductos)
    await carritos.saveCarritoById(id, carrito)
    res.json(`id:${id} Editado`)
});



routerCarritos.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = parseInt(req.params.id)
    const id_prod = parseInt(req.params.id_prod)

    let carrito = await carritos.getCarritoById(id)
    
    const newProductos = carrito.productos.filter(e => e.id !== id_prod)
    carrito.productos = newProductos

    await carritos.saveCarritoById(id, carrito)
    res.json(`Producto id:${id_prod} eliminado de carrito id:${id}`)
});



routerCarritos.get('/', async (req, res) => {
    const arrayCarritos = await carritos.getAllCarritos()
    res.json( arrayCarritos )
});

routerCarritos.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = await carritos.getCarritoById(id)
    res.json( carrito )
});

routerCarritos.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = req.body
    await carritos.saveCarritoById(id, carrito)
    res.json(`id:${id} Editado`)
});


export default routerCarritos;



