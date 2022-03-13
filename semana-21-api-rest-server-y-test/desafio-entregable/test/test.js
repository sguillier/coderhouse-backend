import axios from 'axios'
import assert from 'assert'
import { crearServidor } from '../src/server.js'



describe('almacenador', () => {
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

        let user

        try {
            user = await axios.post('/api/auth/register', {
                "firstname": "Juan",
                "lastname": "Perez",
                "age": "20",
                "usernumber": "123456789",
                "username": "juanrios@correo.com",
                "password": "123456",
                "avatar": "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/12-Delivery_Man-256.png",
            })
        } catch (err) {
            user = await axios.post('/api/auth/login', {
                "username": "juanperez@correo.com",
                "password": "123456",
            })
            console.log('++++++++++++++')
        }

        // if (user.data.token) {
        //     const token = user.data.token
        //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // }

        console.log('..................', user.config.data)

        const estado = await axios.get('/api/auth/isauth')

        // console.log('HOLALALALAL   ', estado)


        // const cosasAntes = [...cosasDao.verTodas()]
        // const cosa = { nombre: 'silla' }

        // const { data: cosasActualizada } = await axios.post('/', cosa)
        // assert.deepStrictEqual(cosasActualizada, [...cosasAntes, cosa])
    })
})