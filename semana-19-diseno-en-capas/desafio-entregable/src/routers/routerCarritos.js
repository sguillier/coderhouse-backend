import { Router } from 'express'
const routerCarritos = Router();

// import claseCarritos from './../persistencia/daos/claseCarritos.js'
// const carritos = new claseCarritos()

import { 
    getCarritoControler,
    postCarritoControler,
    deleteCarritoIdControler,
    getCarritoIdControler,
    putCarritoIdControler,
    getCarritoIdProductosControler,
    postCarritoIdProductoIdControler,
    deleteCarritoIdProductoIdControler 
} from './../controladores/controlerCarritos.js'

routerCarritos.get('/', getCarritoControler)
routerCarritos.post('/', postCarritoControler)
routerCarritos.delete('/:id', deleteCarritoIdControler)
routerCarritos.get('/:id', getCarritoIdControler)
routerCarritos.put('/:id', putCarritoIdControler)
routerCarritos.get('/:id/productos', getCarritoIdProductosControler)
routerCarritos.post('/:id/productos', postCarritoIdProductoIdControler)
routerCarritos.delete('/:id/productos/:idProducto', deleteCarritoIdProductoIdControler)




// routerCarritos.get('/', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const arrayCarritos = await carritos.getAllCarts()
//         res.json(arrayCarritos)
//     } else {
//         res.send('No autenticado')
//     }
// });


// routerCarritos.post('/', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const nuevoCarrito = { ...req.body, usuario: req.user }
//         await carritos.saveCart(nuevoCarrito)
//         res.json(nuevoCarrito);
//     } else {
//         res.send('No tiene permisos para esta accion')
//     }
// });


// routerCarritos.delete('/:id', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const id = parseInt(req.params.id)
//         await carritos.deleteCartById(id)
//         res.json(`id:${id} Eliminado`)
//     } else {
//         res.send('No tiene permisos para esta accion')
//     }
// });


// routerCarritos.get('/:id/productos', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const id = parseInt(req.params.id)
//         res.json(await carritos.getAllProductsFromCartByCartId(id))
//     } else {
//         res.send('No tiene permisos para esta accion')
//     }
// });


// routerCarritos.post('/:id/productos', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const id = parseInt(req.params.id)
//         const newProductos = req.body

//         await carritos.addProductsToCartByCartId(id, newProductos)
//         res.json(`id:${id} Editado`)
//     } else {
//         res.send('No tiene permisos para esta accion')
//     }
// });



// routerCarritos.delete('/:id/productos/:ProductId', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const id = parseInt(req.params.id)
//         const ProductId = parseInt(req.params.ProductId)

//         await carritos.deleteProductByIdFromCartByCartId(id, ProductId)
//         res.json(`Producto id:${ProductId} eliminado de carrito id:${id}`)
//     } else {
//         res.send('No tiene permisos para esta accion')
//     }
// });





// routerCarritos.get('/:id', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const id = parseInt(req.params.id)
//         const carrito = await carritos.getCartById(id)
//         res.json(carrito)
//     } else {
//         res.send('No tiene permisos para esta accion')
//     }
// });



// routerCarritos.put('/:id', async (req, res) => {
//     if (req.isAuthenticated()) {
//         const id = parseInt(req.params.id)
//         const carrito = req.body
//         await carritos.saveCartById(id, carrito)
//         res.json(`id:${id} Editado`)
//     } else {
//         res.send('No tiene permisos para esta accion')
//     }
// });


export default routerCarritos;



