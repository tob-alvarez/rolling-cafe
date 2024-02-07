
# Rolling Cafe

This is a static coffe shop page build with ReactJS + Vite, Bootstrap, dbjson, and love. 


## Installation

Install my-project with npm

```bash
    git clone https://github.com/tob-alvarez/rolling-cafe.git
    cd rolling-cafe
    npm install
    npm install -g json-server
```

//File upload error because script execution is disabled on your system

    Ejecuta el siguiente comando para verificar la política de ejecución actual:

powershell
```bash
Get-ExecutionPolicy
```
Si obtienes "Restricted" como resultado, significa que la ejecución de scripts está deshabilitada.

Cambia la política de ejecución:
Para habilitar la ejecución de scripts, puedes establecer la política de ejecución en RemoteSigned. Esto permitirá la ejecución de scripts locales firmados y todos los scripts remotos.

powershell
```bash
Set-ExecutionPolicy RemoteSigned
```
Te preguntará si estás seguro de realizar este cambio. Responde con "Sí" o "S".

Vuelve a intentar ejecutar json-server:
Después de cambiar la política de ejecución, intenta ejecutar nuevamente el comando json-server:

```bash
json-server --watch ./db.json
```
Estos pasos deberían permitir que ejecutes json-server sin problemas. Después de realizar estos cambios, asegúrate de revertir la política de ejecución a un nivel seguro después de haber terminado:

powershell
```bash
Set-ExecutionPolicy Restricted
```
Recuerda que cambiar la política de ejecución puede tener implicaciones de seguridad, así que asegúrate de entender los riesgos asociados y de ajustar la configuración según tus necesidades.


Run json-server

```bash
    json-server --watch ./db.json
```
Run the app

```bash
    npm run dev
```
## Demo

Insert gif or link to demo

