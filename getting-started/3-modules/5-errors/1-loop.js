/* Errors vs Exceptions
an Error is a "Problem"
an Exception is a "Condition"
*/

const path = require('path')                //modulo que facilita la rutas
const fs = require('fs')                    //modulo que facilita la lectura de documentos

const files = ['.bash_profile', '.npmrc']   //variable donde dice el nombre de los archivos a buscar

files.forEach(file => {                     //pasa por cada valor de files
    
    //path.resolve es para ingresar facil a undirectorio
    //process.env.HOME manda a la ruta principal
    //file es el nombre del current file dentro de files
    //filePath obtendra la ruta completa del archivo si es que existe
    const filePath = path.resolve(process.env.HOME, file) 

    //fs.readFileSync(filePath) obtendra todo el contenido de el archivo en la ruta
    //data contendra todo el texto del archivo
    const data = fs.readFileSync(filePath)

    //console.log mostrara todo el contenido en texto de data
    console.log('File data is ', data)
})