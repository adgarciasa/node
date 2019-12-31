const http = require('http')

// guardamos el metodo de crear un servidor en la variable server
const server = http.createServer((req, res) => { 
    res.end('Hello world\n') // una respuesta de que esta funcionando sera HW
})

// aqui si invocamos el create server y lo que tenga
server.listen(4242, () => {             // lo levantamos en el puerto 4242
    console.log('Server is running...') // y escribimos en consola esto
})