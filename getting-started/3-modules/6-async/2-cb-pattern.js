//normal async callback pattern, this pattern dont wait and do next line, and the cb returns what they asked for in the next part
const fs = require('fs')

fs.readFile(__filename, 'utf8',function cb(err, data) { //do this asyncronously
    console.log('File data is', data)
})

console.log('TEST') //then this

//and finally, show the requests