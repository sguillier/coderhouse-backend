# Respuesta

1. Al utilizar `compression` la ruta `http://localhost:80/info` tiene un peso de 829 B. Sin el uso de `compression` la ruta tiene un peso de 853 B. 
    No tiene mucha diferencia ya que el archivo no es muy regular (entropia alta).
    Los datos fueron obtenidos usando chrome.

2. Implementamos `winston` y leggueamos los siguientes criterios:
    - nivel info : Ruta y metodo de todas las peticiones
    - nivel warn : Ruta y metodo de peticiones a rutas inexistentes
    - nivel error : Errores lanzados por las apis de "mensajes" y "productos" 

    Respecto de las salidas:
    - Sacamos todo por consola (info, warn error)
    - Los warns quedan registrados en archivo `src/loggers/warns.log`
    - Los errors quedan registrados en archivo `src/loggers/errors.log`

3. Pruebas a la ruta /info con artillery
    - Istalamos primero artillery  `npm i -g artillery@1.7.96`
    - Luego levantamos el servidor `node src/server.js` 
    - Luego ejecutamos `artillery quick --count 50 -n 40 http://localhost?max=100000 > ./tests/artillery/result_sinLog.txt`
    
    Incluimos `console.log(info)` y repetimos el proceso
    - Levantamos el servidor `node src/server.js` 
    - Ejecutamos `artillery quick --count 50 -n 40 http://localhost?max=100000 > ./tests/artillery/result_sinLog.txt`

    Tenemos que sinLog el numero de peticiones es 362.32 por segundo, mientra que conLog el numero es 209.86 por segundo
    El detalle de los resultados estan en la los archivos `tests/artillery/result_sinLog.txt` y `tests/artillery/result_conLog.txt`.

4. Pruebas con autocannon y 0x
    - primero instalamos `npm i autocannon` y `npm i -g 0x`
    - creamos el archivo `benchmark/benchmark.js`
    - editamos package.json
        `"start": "0x src/server.js",`
        `"test": "node tests/benchmark/benchmark.js"`
    - ejecutamos `npm start`
    - luego ejecutamos `npm test`
    - Los resultados (sin console.log(info)) se pueden ver en `tests/benchmark/printSinLog.js` y en `tests/benchmark/flamaSinLog/flamegraph.html`
    - Los resultados (con console.log(info)) se pueden ver en `tests/benchmark/printConLog.js` y en `tests/benchmark/flamaConLog/flamegraph.html`
    
    Conclusiones
    - Si bien no se ven diferencias significativas entre ambos graficos de flamas, si hay una mayor presencia de mesetas en el caso de conLog vs sinLog
    - Como es de esperar los tiempos promedio de sinLog son menores que conLog. Al igual que los tiempos menores y maximos.
    - Un resumen de los resultados se puede encontrar en `tests/benchmark/resumenResultados.pdf`






