# comentario

- En esta carpeta los ejemplos utilizan express-session y la persistencia de las sessiones es en redis


- En la siguiente pagina está la opcion de logear con redis para utilzar redis lab.

https://redis.com/


- Comentario: en la siguiente pagina no encontré posibilidad de instalar directamente redis en windows, solo mediante docker

https://redis.io/download


- Para instalar redis mediante doocker utilizar la siguiente secuencia de comandos:

descargar imagen:
docker pull redis

crear contenedor (e iniciar servicio):
docker run --name redis-local -p 6379:6379 -d redis 

('redis-local' es un nombre arbitrario)

detener servicio:
docker stop redis-local

iniciar servicio:
docker start redis-local

usar cliente por terminal:
docker exec -it redis-local bash 
docker# redis-cli

