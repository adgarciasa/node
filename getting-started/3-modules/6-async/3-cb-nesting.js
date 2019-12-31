//a callback async call another callback, this pattern send a request to another callback, but what if you need to do a lot of requestes? answer: callback to hell

const fs = require('fs')

fs.readFile(__filename,function cb(err, data) { //do this asyncronously
    fs.writeFile(__filename + '.copy', data, function cb2(err, data) { //get req and do this async~~
        console.log('File data is', data)
        // but what if you need more changes in your data?
        // Nest more callbacks here..
        // the called callback to hell
    })
})

console.log('TEST') //then this

//and finally, show the requests