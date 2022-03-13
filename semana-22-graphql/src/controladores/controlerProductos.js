import claseProductos from '../persistencia/daos/claseProductos.js'
const productos = new claseProductos()

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
    return "Producto guardado con id:" + id
}


const putProductoIdControler = async ({id, productoEditado, admin}) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    await productos.saveProductById(id, productoEditado)
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