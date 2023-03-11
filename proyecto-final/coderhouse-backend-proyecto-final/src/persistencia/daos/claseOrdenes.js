
import getColeccion from "./index.js"
const coleccionOrdenes = await getColeccion('ordenes')

class claseOrdenes {

    constructor() {
        this.ordenes = coleccionOrdenes
    }

    getAllOrders = async () => {
        return await this.ordenes.getAll()
    }

    getOrderById = async (id) => {
        return await this.ordenes.getById(id)
    }


    getAllProductsFromOrderByOrderId = async (id) => {
        const orden = await this.ordenes.getById(id)
        return orden.productos
    }


    saveOrder = async (item) => {
        return await this.ordenes.save(item)
    }

    saveOrderById = async (id, item) => {
        return await this.ordenes.saveById(id, item)
    }


    deleteOrderById = async (id) => {
        return await this.ordenes.deleteById(id)
    }

    deleteAllOrders = async () => {
        return await this.ordenes.deleteAll()
    }
    

}

export default claseOrdenes