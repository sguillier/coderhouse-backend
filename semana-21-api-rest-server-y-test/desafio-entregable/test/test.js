import axios from 'axios'
import assert from 'assert'
import { crearServidor } from '../src/server.js'



describe('Test de API Productos', () => {
    const servidor = crearServidor()

    before(async () => {
        await servidor.conectar()
        axios.defaults.baseURL = 'http://localhost:8080'
    })

    after(async () => {
        await servidor.desconectar()
    })

    //   it('debería comenzar vacío', async () => {
    //     const { data: cosas } = await axios.get('/')
    //     assert.deepStrictEqual(cosas, [])
    //   })

    it('Agregamos un nuevo producto y lo borramos y el listado de productos sigue siendo el mismo', async () => {
        let resGet
        resGet = await axios.get('/api/productos')
        const productosInicio = resGet.data
        
        const resPost = await axios.post('/api/productos', {
            nombre: "Mapa",
            precio: "1690",
            url: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png"
        })
        const idCreado = resPost.data
        const resDelete = await axios.delete(`/api/productos/${idCreado}`)

        resGet = await axios.get('/api/productos')
        const productosFinal = resGet.data

        assert.deepStrictEqual(productosFinal, productosInicio)
    })
})