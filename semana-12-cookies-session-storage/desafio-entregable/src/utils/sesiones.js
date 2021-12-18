import session from 'express-session'
import MongoStore from 'connect-mongo'
// Tambien hay que tener instalado npm i mongodb


export default async function Sesiones(app) {

    app.use(session({
        /* ----------------------------------------------------- */
        /*           Persistencia por mongoDB database           */
        /* ----------------------------------------------------- */
        store: MongoStore.create({ mongoUrl: 'mongodb://localhost/sesiones' }),
        // store: MongoStore.create({ 
        //     mongoUrl: 'mongodb://coderhouse:<password>@myprimeratlas.2tr0z.mongodb.net?retryWrites=true&w=majority',
        //     dbName: 'sesiones',
        //     touchAfter: 3000
        // }),
        /* ----------------------------------------------------- */

        secret: 'palabranueva',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 10000
        }
    }))


    app.get('/api/session/state', (req, res) => {
        if (req.session.nombre) {
            res.send({
                state: 'on',
                nombre: req.session.nombre
            })
        }
        else {
            res.send({ state: 'off' })
        }
    })


    app.post('/api/session/login', (req, res) => {
        const data = req.body
        if (req.session.nombre) {
            res.send({ mensaje: 'Ya estas Conectado' })
        }
        else {
            req.session.nombre = data.nombre
            res.send({ mensaje: `Bienvenido ${data.nombre}!` })
        }
    })


    app.get('/api/session/logout', (req, res) => {
        req.session.destroy(err => {
            if (!err) res.send('Logout ok!')
            else res.send({ status: 'Logout ERROR', body: err })
        })
    })

}
