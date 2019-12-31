/**corre node 3-wrapper.js
 * arguments no es solo una variable, es una funcion que contiene informacion de donde la mandan a llamar
 * siempre esta recibiendo algo, y si lo recibe externamente reescribira su contenido
 * ¿Internamente 
 */


// function (exports, module, require, __filename, __dirname) {
// exports = variables que pueden ser usadas fuera de la funcion. se puede usar con return o con export

exports.a = 42
module.exports.b = 37 //module hace que se llame a si mismo por lo que no es necesario aqui

//console.log(arguments)

// } (module.exports, first argument)


// ... y recuerda

// exports = () => {} //not ok

module.exports = () => {} // ok