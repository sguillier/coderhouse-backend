import { Router } from 'express'
const routerOrdenes = Router();

import { 
    getOrdenControler,
    postOrdenControler,
    deleteOrdenIdControler,
    getOrdenIdControler,
    putOrdenIdControler,
    getOrdenIdProductosControler,
    deleteOrdenIdProductoIdControler 
} from '../controladores/controlerOrdenes.js'

routerOrdenes.get('/', getOrdenControler)
routerOrdenes.post('/', postOrdenControler)
routerOrdenes.delete('/:id', deleteOrdenIdControler)
routerOrdenes.get('/:id', getOrdenIdControler)
routerOrdenes.put('/:id', putOrdenIdControler)
routerOrdenes.get('/:id/productos', getOrdenIdProductosControler)
routerOrdenes.delete('/:id/productos/:idProducto', deleteOrdenIdProductoIdControler)


export default routerOrdenes;



