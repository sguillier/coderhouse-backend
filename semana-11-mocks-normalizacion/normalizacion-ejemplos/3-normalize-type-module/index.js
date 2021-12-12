// const { normalize, schema } = require("normalizr");
// const fs = require('fs')

import { normalize, schema } from 'normalizr'
import { promises as fs } from 'fs'


const empresa = JSON.parse(await fs.readFile('./empresa.json', 'utf-8'))

// Definimos un esquema de empleado
const empleado = new schema.Entity('empleado');

// Definimos un esquema de organigrama
const organigrama = new schema.Entity('organigrama', {
  gerente: empleado,
  encargado: empleado,
  empleados: [ empleado ]
});

/* ---------------------------------------------------------------------------------------- */
// const util = require('util')
import { inspect } from 'util'

function print(objeto) {
  console.log(inspect(objeto, false, 12, true))
  // console.log(util.inspect(objeto, false, 12, true))
}

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedEmpresa = normalize(empresa, organigrama);
print(normalizedEmpresa)

console.log('Longitud objeto original: ', JSON.stringify(empresa).length)
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizedEmpresa).length)
