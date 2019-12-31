const express = require('express')
const server = express()

server.get('/', (req, res) => { //al entrar a esta ruta
    res.send('Hello Express')   //manda esto
})

server.get('/about', (req, res) => { //al entrar a esta ruta
    res.send('About Hello Express...')   //manda esto
})

server.listen(4242, () => {
    console.log('Express Server is running')
})