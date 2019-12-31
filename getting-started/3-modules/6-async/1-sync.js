//normal sync with directly calls, just reading a file and wait to the next line
const fs = require('fs')
const data = fs.readFileSync(__filename, 'utf8')

console.log('File data is', data)
console.log('TEST')