import claseProductos from './../persistencia/daos/claseProductos.js'
const productos = new claseProductos()

const admin = true

const getProductosControler = async (req, res) => {
    const arrayProductos = await productos.getAllProducts()
    res.json(arrayProductos)
}

const getProductoIdControler = async (req, res) => {
    const id = parseInt(req.params.id)
    const producto = await productos.getProductById(id)
    res.json(producto)
}

const postProductoControler = async (req, res) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    const nuevoProducto = req.body
    await productos.saveProduct(nuevoProducto)
    res.json(nuevoProducto);
}


const putProductoIdControler = async (req, res) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    const id = parseInt(req.params.id)
    const producto = req.body
    await productos.saveProductById(id, producto)
    res.json(`id:${id} Editado`)
}

const deleteProductoIdControler = async (req, res) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    const id = parseInt(req.params.id)
    await productos.deleteProductById(id)
    res.json(`id:${id} Eliminado`)
}


export { 
    getProductosControler, 
    getProductoIdControler, 
    postProductoControler, 
    putProductoIdControler, 
    deleteProductoIdControler 
}