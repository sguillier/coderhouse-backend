
### Instrucciones

- Para hacer funcionar esto en windows solo ejecutar en archivo `nginx.exe` ubicado dentro de carpeta `nginx- 1.20.2`
- Para ejecutar se puede hacer doble clic sobre el ejecutable o bien por linea de comando `./nginx.exe`
- Otros Comandos utiles son:

    - `./nginx.exe -s stop`  para un apagado rápido.
    - `./nginx.exe -s quit`  para un cierre más elegante.
    - `./nginx.exe -s reload`  para reiniciar el servidor al cambiar la configuración, iniciar nuevos procesos de trabajo con una nueva configuración, cierre elegante de los procesos de trabajo antiguos.
    - `./nginx.exe -s reopen`  para reabrir logs de archivos

 - En archivo `conf/nginx.conf` está toda la configuración del servidor