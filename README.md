# Aplicación de chat
## _Next Js, Express Js y Socket . io_

Aplicación que utiliza sockets para transmitir los mensajes entre clientes a través del servidor, además se está utilizando Axios para peticiones HTTP, Zustand como state manager para almacenar los datos del usuario, y formik para los formularios.
Los mensajes y usuarios se mantienen en tanto el backend se esté ejecutando.

## Como usar
Debes tener instalado node.js y un sistema de gestión de paquetes (npm o yarn), en la carpeta del frontend y en la carpeta del backend debes descargar las dependencias con el siguiente comando
```bash
\chat-app\frontend> npm install # o yarn install
\chat-app\backend> npm install # o yarn install
```
Para ejecutar tanto el backend como el frontend, debes ejecutar los siguientes comandos
```bash
\chat-app\frontend> npm run dev # o yarn dev
\chat-app\backend> npm run dev # o yarn dev
```
En frontend correrá en http://localhost:3000 y el backend en http://localhost:3001
