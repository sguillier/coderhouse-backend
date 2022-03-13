import { Router } from 'express'
import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

const routerProductos = Router();

import {
    getProductosControler,
    getProductoIdControler,
    postProductoControler,
    putProductoIdControler,
    deleteProductoIdControler
} from '../controladores/controlerProductos.js'





// Estos endpoints no los borraré, para que no se caigan los llamados del fron que no vayan a graphql
routerProductos.get('/', async (req, res) => {
    res.json(await getProductosControler({}))
})

routerProductos.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    res.json(await getProductoIdControler({id}))
})

routerProductos.post('/', async (req, res) => {
    const nuevoProducto = req.body
    const admin = true
    res.json(await postProductoControler({nuevoProducto, admin}))
})

routerProductos.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const producto = req.body
    const admin = true
    res.json(await putProductoIdControler({id, producto, admin}))
})

routerProductos.delete('/:id', async (req,res) => {
    const id = parseInt(req.params.id)
    const admin = true
    res.json(await deleteProductoIdControler({id, admin}))
})




const schema = buildSchema(`
  input ProductoInput {
    nombre: String
    precio: Int
    url: String
  }
  type Producto {
    id: ID!
    nombre: String
    precio: Int
    url: String
  }
  type Query {
    getProducto(id: ID!): Producto
    getProductos: [Producto]
  }
  type Mutation {
    createProducto(datos: ProductoInput): Producto
    updateProducto(id: ID!, datos: ProductoInput): Producto
    deleteProducto(id: ID!): Producto
  }
`)




routerProductos.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: {
            getProductosControler,
            getProductoIdControler,
            // createProducto,
            // updateProducto,
            // deleteProducto,
        },
        graphiql: true,
    })
)







export default routerProductos;


