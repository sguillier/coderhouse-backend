
import getObjetoColeccion from "./index.js"
const coleccionCarritos =  await getObjetoColeccion('carritos')

class claseCarritos {

    constructor() {
        this.carritos = coleccionCarritos
    }

    getAllCarritos = async () => {
        return await this.carritos.getAll()
    }

    getCarritoById = async (id) => {
        return await this.carritos.getById(id)
    }

    saveCarrito = async (item) => {
        return await this.carritos.save(item)
    }

    saveCarritoById = async (id, item) => {
        return await this.carritos.saveById(id, item)
    }
    
    deleteCarritoById = async (id) => {
        return await this.carritos.deleteById(id)
    }

    deleteAllCarritos = async () => {
        return await this.carritos.deleteAll()
    }

}

export default claseCarritos