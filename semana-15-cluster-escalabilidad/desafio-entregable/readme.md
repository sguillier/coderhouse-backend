
## Pasos seguidos

- Dentro de la carpeta `/nodeServer/` ejecutar los siguentes comandos: 
    - `pm2 start server.js --name="Server1" --watch -- 8081 FORK`
    - `pm2 start server.js --name="Server2" --watch -- 8082 CLUSTER`

- Para levantar el servidor en windows solo ejecutar en archivo `nginx.exe` ubicado dentro de carpeta `nginx- 1.20.2`. El archivo está como gitignore.
- En archivo `/nginx-1.20.2/conf/nginx.conf` está toda la configuración del servidor, en donde se consideró:
    - Las peticiones a `/api/randoms` van al servidor `server 127.0.0.1:8081`
    - Todas las otras peticiones a la ruta `/api/` van al `server 127.0.0.1:8080`
    - Con lo anterior todo funciono bien y las peticiones hechas `/api/randoms` no bloqueaban al resto de peticiones hechas en `/api/`. 
    - Sin embargo el socket.io dejo de funcionar, por ello incluí un nuevo `location` en el archivo de configuracion. 


