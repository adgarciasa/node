// Top-level API is a function

const templateGenerator = require('./4-function')

//esta variable llama al modulo de arriba y le manda un argumento
const myTemplate = templateGenerator("Hello World")

console.log(myTemplate)
