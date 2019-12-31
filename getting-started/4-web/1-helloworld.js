/*const http = require('http')

// guardamos el metodo de crear un servidor en la variable server
const server = http.createServer((req, res) => { 
    res.end('Hello world\n') // una respuesta de que esta funcionando sera HW
})

// aqui si invocamos el create server y lo que tenga
server.listen(4242, () => {             // lo levantamos en el puerto 4242
    console.log('Server is running...') // y escribimos en consola esto
})*/

//creador de servers http(web)
const http = require('http') 

//funcion asincrona, si funciona manda el req
//const requestListener = (req, res) => res.end('Hello World') 
const requestListener = (req, res) => {
    res.write('Hello world\n')
    res.end() 
}

//metodo create server, con los valores referenciados a la variable requestListener 
//const server = http.createServer(requestListener)
const server = http.createServer()
server.on('request', requestListener) //por si se hace una peticion a server se le adiciona este dato

//aqui si, llamamos a la variable server que referencia a http.createserver(requestListener)
//y le adicionamos algunas cosas como el metodo listen y sus contenidos
server.listen(4242, () => {             
    console.log('Server is running...') 
})