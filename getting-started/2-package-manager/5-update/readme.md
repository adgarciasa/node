Muestra todos los paquetes instalados en el proyecto
$ npm ls

Actualiza los paquetes dependiendo a la version declarada
$ npm update 

Muestra la version actual, la mas cercana y la nueva del paquete
$ npm outdated

Muestra info del paquete
$ npm show lodash

Muestra todas las versiones de este paquete
$ npm show lodash versions

Instala un paquete
$ npm i express

Desinstala un paquete
$ npm uninstall express

Instala un paquete
$ npm i express@lastest lodash@3.23.3

package.json
    "express": "5.34.5"  //esta version exacta
    "lodash": "~4.16.6", //la version mas cercana a esta
    "request": "^2.88.0" //la version mas nueva