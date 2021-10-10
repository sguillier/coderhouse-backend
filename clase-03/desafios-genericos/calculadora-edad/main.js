
const moment = require('moment')

const nacimiento = moment("19820731","YYYYMMDD")

console.log('Edad: ', nacimiento.fromNow())
