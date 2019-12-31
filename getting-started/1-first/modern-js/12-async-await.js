// Promises and Async/Await versions

const https = require('https')

function fetch(url) {                                   // una funcion
    return new Promise((resolve, reject) => {           // que retorna una promesa que obtiene un res y un req
        https.get(url, (res) => {                       // hace una peticion https get
            let data = ''                               // crea una variable data
            res.on('data', (rd) => data = data + rd)    // en respuesta a la obtencion de data manda esto
            res.on('end', () => resolve(data))          // en respuesta al final de la respesta manda esto
            res.on('error', reject)                     // en respuesta al error
        })
    })
}

fetch('https://www.javascript.com/')                     // hace una peticion a una direccion
    .then(data => {                                      // entonces toma la respuesta y la asignaa la variable data
        console.log(data.length)
    })

(async function read() {                                        // una funcion normalita convirtiendose en asincrona
    const data = await fetch('https://www.javascript.com/')     
    console.log(data.length)
})()

