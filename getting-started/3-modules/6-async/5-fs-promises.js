// se obtiene el metodo readFile y se le otorgan propiedades de promesa
const { readFile } = require('fs').promises

async function main() {                         //funcion asincrona
    const data = await readFile(__filename)
    console.log('File data is', data)
}
main()                                          //llama a la funcion asincrona, entra a la lista su respuesta
console.log('TEST')                             //imprime TEST
                                                //comienza a recibir los callbacks