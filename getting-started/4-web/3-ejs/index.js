const express = require('express')
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => { //al entrar a esta ruta
    res.render('index')   //manda esto
})

server.get('/about', (req, res) => { //al entrar a esta ruta
    res.render('about')   //manda esto
})

server.listen(4242, () => {
    console.log('Express Server is running')
})