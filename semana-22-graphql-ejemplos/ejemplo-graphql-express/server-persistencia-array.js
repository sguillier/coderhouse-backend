import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import crypto from 'crypto'

const schema = buildSchema(`
  input PersonaInput {
    nombre: String
    edad: Int
  }
  type Persona {
    id: ID!
    nombre: String
    edad: Int
  }
  type Query {
    getPersona(id: ID!): Persona
    getPersonas(campo: String, valor: String): [Persona]
  }
  type Mutation {
    createPersona(datos: PersonaInput): Persona
    deletePersona(id: ID!): Persona
  }
`)


const personasArray = []

function getPersonas({ campo, valor }) {
  // const personas = Object.values(personasMap)
  return personasArray
}

function getPersona({ id }) {
  let personasMap
  personasArray.forEach(p => {
    if (p.id == id) {
      personasMap = p
    }
  })
  if (personasMap) {
    return 'Persona not found.'
  }
  return personasMap
}

function createPersona({ datos }) {
  const id = crypto.randomBytes(10).toString('hex')
  const nuevaPersona = {id, datos}
  personasArray.push(nuevaPersona)
  return nuevaPersona
}


function deletePersona({ id }) {
  const nuevoArray = personasArray.filter(p => p.id != id)
  personasArray = nuevoArray
  return personasArray
}

const app = express()

app.use(express.static('public'))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: {
      getPersonas,
      getPersona,
      createPersona,
      deletePersona,
    },
    graphiql: true,
  })
)

const PORT = 8080
app.listen(PORT, () => {
  const msg = `Servidor corriendo en puerto: ${PORT}`
  console.log(msg)
})
