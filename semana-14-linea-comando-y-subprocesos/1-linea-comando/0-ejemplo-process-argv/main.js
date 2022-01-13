console.log("Mostramos en consola los argumentos pasados por la línea de comandos");
console.log("Cantidad de argumentos: " + process.argv.length);

const processArgv = process.argv
processArgv.forEach(function(element, index) {
    console.log("Argumento " + index + ": " + element);
})
