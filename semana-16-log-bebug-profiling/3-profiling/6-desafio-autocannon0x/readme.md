# Consigna

1. Realizar un análisis de performance sobre el desafío anterior, utilizando 0x y autocannon en modo consola. Con autocannon realizar un test con el servidor corriendo con 0x, emulando 500 conexiones concurrentes realizadas en 20 segundos de test.
2. Hacer el procedimiento mencionado con el servidor en modo fork y sobre los endpoint '/randoms-debug' y '/randoms-nodebug' obteniendo en cada caso el reporte de autocannon y el diagrama de flama.
3. Analizar para cada caso los datos y gráficos obtenidos, y revisar que los resultados concuerden con los esperado: la ruta con debug por console.log es menos performante (bloquea más el servidor) que la que no lo contiene.
