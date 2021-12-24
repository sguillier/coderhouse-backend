import { Router } from 'express'
import faker from 'faker'
faker.locale = 'es'



let id = 1
function getNextId() {
    return id++
}

function crearCombinacionAlAzar(id) {
    return {
        id,
        nombre: faker.commerce.productName(),
        precio: faker.commerce.price(),
        url: faker.image.imageUrl()
    }
}

function generarNPersonas(cant) {
    const personas = []
    for (let i = 0; i < cant; i++) {
        personas.push(crearCombinacionAlAzar(getNextId()))
    }
    return personas
}


const routerProductosTest = Router();
routerProductosTest.get('/', async (req, res) => {
    res.json(generarNPersonas(5))
});


export default routerProductosTest;


