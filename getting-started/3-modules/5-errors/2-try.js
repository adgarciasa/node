/* Errors vs Exceptions
TRY
*/

const path = require('path')                //modulo que facilita la rutas
const fs = require('fs')                    //modulo que facilita la lectura de documentos
const files = ['.bash_profile', 'fsdadsafs', '.npmrc']   //variable donde dice el nombre de los archivos a buscar

files.forEach(file => {                     //pasa por cada valor de files
    try{                                    //trata de hacer esto
        const filePath = path.resolve(process.env.HOME, file) 
        //const data = fs.readFileSync(filePath)
        const data = fs.readFileSync(filePath, 'utf-42')
        console.log('File data is ', data)
    } catch (err) {                         //y si no funciona has esto
        //console.log('File not found.')
        console.log('Something went wrong and we are going to ignore it.')
    }
})

/**
 * run $ node 2-try
 * this is fine, but every error is showed as this, even if there is another bug
 */