import claseProductos from '../persistencia/daos/claseProductos.js'
const productos = new claseProductos()

const admin = true

const getProductosControler = async ({}) => {
    const arrayProductos = await productos.getAllProducts()
    return arrayProductos
}

const getProductoIdControler = async ({id}) => {
    const producto = await productos.getProductById(id)
    return producto
}

const postProductoControler = async ({nuevoProducto, admin}) => {
    if (admin === false) {
        return "No tienes suficientes privilegios para esta peticion"
    }
    const id = await productos.saveProduct(nuevoProducto)
    return "Porducto guardado con id:" + id
}


const putProductoIdControler = async ({id, producto, admin}) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    await productos.saveProductById(id, producto)
    return `id:${id} Editado`
}

const deleteProductoIdControler = async ({id, admin}) => {

    if (admin === false) {
        return "No tienes suficientes privilegios para esta peticion"
        return
    }
    await productos.deleteProductById(id)
    return `id:${id} Eliminado`
}


export { 
    getProductosControler, 
    getProductoIdControler, 
    postProductoControler, 
    putProductoIdControler, 
    deleteProductoIdControler 
}