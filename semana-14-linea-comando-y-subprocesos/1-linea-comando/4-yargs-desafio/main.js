
// const yargs = require('yargs/yargs')(process.argv.slice(2))
// const { modo, puerto, debug, _ } = yargs
//     .boolean('debug')
//     .alias({
//         m: 'modo',
//         p: 'puerto',
//         d: 'debug'
//     })
//     .default({
//         modo: 'prod',
//         puerto: 0,
//         debug: false
//     })
//     .argv
// console.log({ modo, puerto, debug, otros: _ });





import yargs from 'yargs'

const { modo, puerto, debug, _ } = yargs(process.argv.slice(2))
    .boolean('debug')
    .alias({
        m: 'modo',
        p: 'puerto',
        d: 'debug'
    })
    .default({
        modo: 'prod',
        puerto: 0,
        debug: false
    })
    .argv

console.log({ modo, puerto, debug, otros: _ });
