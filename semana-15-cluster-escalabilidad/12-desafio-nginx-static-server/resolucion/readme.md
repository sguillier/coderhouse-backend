
### Instrucciones

- Dentro de la carpeta `/nodeServer/` ejecutar los siguentes comandos: 
    - `pm2 start server.js --name="Server1" --watch -- 8081 FORK`
    - `pm2 start server.js --name="Server2" --watch -- 8082 CLUSTER`

- Para levantar el servidor en windows solo ejecutar en archivo `nginx.exe` ubicado dentro de carpeta `nginx- 1.20.2`
- Para ejecutar se puede hacer doble clic sobre el ejecutable o bien por linea de comando `./nginx.exe`
- En archivo `/nginx-1.20.2/conf/nginx.conf` está toda la configuración del servidor
