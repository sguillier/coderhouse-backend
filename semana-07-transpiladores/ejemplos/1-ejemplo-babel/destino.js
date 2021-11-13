"use strict";

// Ejecutado 'npm run build'
// Todo lo que se edite aqui es cambiado en tiempo real en destino.js
var lista = [1, 2, 3, 4, 5];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
console.log('Hola');
