//if we are going to do more than 1 callback we use promises

const fs = require('fs')
const util = require('util') //parece que es para editar un texto

//de alguna dorma util.promisify convierte una funcion en una promesa, que retorna el resultado o un problema, que despues puedes mandar a una funcion asincrona
const readFile = util.promisify(fs.readFile)

async function main () {
    const data = await readFile(__filename)
    console.log('File data is', data)
}

main()

console.log('TEST') //then this

//and finally, show the requests