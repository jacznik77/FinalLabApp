# YourDailyCoffee 

<img width="145" alt="gatoChiquito" src="https://github.com/jacznik77/FinalLabApp/assets/70603805/c8209082-b124-49a5-8215-000b20a67538">

## Resumen
_**YourDailyCoffee**_ es una aplicación recopiladora de noticias de distintas fuentes
que además presenta un resumen de las mismas para no perder el tiempo ingresando a cada una a menos que se esté realmente interesado.

La aplicación mobile fue desarrollada con **react-native** mientras que el back-end está desarrollado con **express-js**.

## Dependencias

Las dependencias de la aplicación mobile son las siguiente:

    "@react-native-community/datetimepicker": "^7.2.0", //librería utilizada para seleccionar una fecha en un calendario
    "@react-navigation/native": "^6.1.9", // Para la navegación de pantallas a través de la aplicación
    "@react-navigation/native-stack": "^6.9.17", // Para la navegación de pantallas a través de la aplicación
    "@rneui/themed": "^4.0.0-rc.8", // librería usada para iconos y botones personalizados
    "@types/react": "~18.2.14",
    "expo": "^49.0.21", //un framework que ayuda a desarrollar aplicaciones Android, usado más que nada para transmitir la aplicación al telefono y testearla directamente
    "expo-status-bar": "~1.6.0", //se puede quitar? en App.js, Home.js
    "react": "18.2.0",
    "react-hook-form": "^7.49.2", //librería para simplificar la verificación de datos en el front-end
    "react-native": "0.72.6",
    "typescript": "^5.1.3" //se puede quitar? Routes.tsx


## Cómo instalar

1. Clonar repositorio localmente.
2. Dirigirse a la carpeta "server" ubicada en la raíz del proyecto.
    2.1. En el archivo server/database/database.js cambiar la ip local en la variable BASE_URL por la del equipo en que se ejecute el servidor.
3. En la carpeta "server", Ejecutar `npm install` para instalar las dependencias del servidor.
4. Luego ejecutar `node app.js`. ¡Listo! El servidor está en marcha.
5. Dirigirse a la carpeta "client" ubicada en la raíz del proyecto.
    5.1. En el archivo client/src/Constants/constants.js cambiar la ip local en la variable BASE_URL por la del equipo en que se ejecute el servidor.
6. En la carpeta "client", Ejecutar `npm install` para instalar las dependencias de la aplicación.
7. Luego ejecutar `npx expo start`.
8. Escanear el código QR con la aplicación de Android "Expo Go". ¡Listo! La aplicación está en marcha.

