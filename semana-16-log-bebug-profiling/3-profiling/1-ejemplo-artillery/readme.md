# Comentarios

- Istalamos primero artillery  `npm i -g artillery@1.7.96`
- Luego levantamos el servidor de esta carpeta `node server.js 8081 FORK` 
- Luego ejecutamos `artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_fork.txt`

Los resultados de esta prueba quedan en el archivo `result_cluster.txt`


Podemos hacer lo mismo en modo cluster para ver la diferencia
- Luego levantamos el servidor de esta carpeta `node server.js 8081 CLUSTER`
- Luego ejecutamos `artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_cluster.txt`

