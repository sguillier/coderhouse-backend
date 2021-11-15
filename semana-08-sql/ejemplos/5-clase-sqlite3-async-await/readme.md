# Consigna

Realizar un proyecto en Node.js que se conecte a la base de datos llamada ecommerce implementada en MariaDB y ejecute las siguientes procesos:
1- Debe crear una tabla llamada articulos con la siguiente estructura de campos: 
    - nombre tipo varchar 15 caracteres no nulo
    - codigo tipo varchar 10 caracteres no nulo
    - precio tipo float
    - stock tipo entero
    - id clave primaria autoincremet no nula
2- Insertar 5 articulos en esa tabla, con datos de prueba con stocks positivos 
3- Listar la tabla mostrando los resultados en la consola
4- Borrar el articulo con id = 3
5- Actualizar el stock a 0 del articulo con id = 2

Para hacer la secuencia de comando se utiliza async/await
