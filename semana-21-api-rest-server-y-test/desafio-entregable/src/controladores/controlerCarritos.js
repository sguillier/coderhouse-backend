
import claseCarritos from './../persistencia/daos/claseCarritos.js'
const carritos = new claseCarritos()



const getCarritoControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const arrayCarritos = await carritos.getAllCarts()
        res.json(arrayCarritos)
    } else {
        res.send('No autenticado')
    }
}


const postCarritoControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const nuevoCarrito = { ...req.body, usuario: req.user }
        await carritos.saveCart(nuevoCarrito)
        res.json(nuevoCarrito);
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


const deleteCarritoIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        await carritos.deleteCartById(id)
        res.json(`id:${id} Eliminado`)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}

const getCarritoIdProductosControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        res.json(await carritos.getAllProductsFromCartByCartId(id))
    } else {
        res.send('No tiene permisos para esta accion')
    }
}

const postCarritoIdProductoIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        const newProductos = req.body

        await carritos.addProductsToCartByCartId(id, newProductos)
        res.json(`id:${id} Editado`)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


const deleteCarritoIdProductoIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        const ProductId = parseInt(req.params.ProductId)

        await carritos.deleteProductByIdFromCartByCartId(id, ProductId)
        res.json(`Producto id:${ProductId} eliminado de carrito id:${id}`)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}




const getCarritoIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        const carrito = await carritos.getCartById(id)
        res.json(carrito)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


const putCarritoIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        const carrito = req.body
        await carritos.saveCartById(id, carrito)
        res.json(`id:${id} Editado`)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


export {
    getCarritoControler,
    postCarritoControler,
    deleteCarritoIdControler,
    getCarritoIdControler,
    putCarritoIdControler,
    getCarritoIdProductosControler,
    postCarritoIdProductoIdControler,
    deleteCarritoIdProductoIdControler
}