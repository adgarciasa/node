//puedes comparar este archivo con el ejemplo 3
const fs = require('fs').promises //fs como una promesa por lo que lo podemos meter en una funcion asincrona

async function main() {                             //funcion asincrona
    const data = await fs.readFile(__filename)      //peticion asincrona
    await fs.writeFile(__filename + '.copy', data)  //espera fuera del scope a la peticion asincrona anterior
    // More awaits here ...
}

main()
console.log('TEST')