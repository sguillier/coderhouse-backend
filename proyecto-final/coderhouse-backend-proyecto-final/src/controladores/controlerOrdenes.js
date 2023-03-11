
import claseOrdenes from '../persistencia/daos/claseOrdenes.js'
const ordenes = new claseOrdenes()


const getOrdenControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const arrayOrdenes = await ordenes.getAllOrders()
        res.json(arrayOrdenes)
    } else {
        res.send('No autenticado')
    }
}


const postOrdenControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const usuario = req.user
        // Eliminamos la claveValor password para no guardarlas en las ordenes
        delete usuario.password
        const nuevaOrden = { ...req.body, usuario }
        await ordenes.saveOrder(nuevaOrden)
        res.json(nuevaOrden);
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


const deleteOrdenIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        await ordenes.deleteOrderById(id)
        res.json(`id:${id} Eliminado`)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}

const getOrdenIdProductosControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        res.json(await ordenes.getAllProductsFromOrderByOrderId(id))
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


const deleteOrdenIdProductoIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        const ProductId = parseInt(req.params.ProductId)

        await ordenes.deleteProductByIdFromOrderByOrderId(id, ProductId)
        res.json(`Producto id:${ProductId} eliminado de orden id:${id}`)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}




const getOrdenIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const id = parseInt(req.params.id)
        const orden = await ordenes.getOrderById(id)
        res.json(orden)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


const putOrdenIdControler = async (req, res) => {
    if (req.isAuthenticated()) {
        const usuario = req.user
        // Eliminamos la claveValor password para no guardarlas en las ordenes
        delete usuario.password
        const ordenEditada = { ...req.body, usuario }
        
        // console.log('OrEd',ordenEditada)
        const id = parseInt(req.params.id)
        await ordenes.saveOrderById(id, ordenEditada)
        res.json(`id:${id} Editado`)
    } else {
        res.send('No tiene permisos para esta accion')
    }
}


export {
    getOrdenControler,
    postOrdenControler,
    deleteOrdenIdControler,
    getOrdenIdControler,
    putOrdenIdControler,
    getOrdenIdProductosControler,
    deleteOrdenIdProductoIdControler
}