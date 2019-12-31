// $ node 4-require.js
const moduleApi = require('./3-wrapper')

console.log(moduleApi)

/* Aqui a y b se mandan como el argumento.exports
y despues de mostrarlos se imprime el argumento completo, con lo exportado guardado en exports
Lo que realmente recive este archivo en del modulo es module.exports
*/