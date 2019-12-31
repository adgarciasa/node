// Streams are Event Emitters
// process.stdin, process.stdout

const EventEmitter = require('events')      //add a module as a class

const myEmitter = new EventEmitter()        //myEmitter is an object class EventEmitter

setImmediate(() => {    //when a event on this class is declared immediately is called what this contains
    myEmitter.emit('TEST_EVENT') //this calls the object
})

myEmitter.on('TEST_EVENT', () => { //this declares an event here
    console.log('TEST_EVENT was fired')
})
myEmitter.on('TEST_EVENT', () => { //this declares an event here
    console.log('TEST_EVENT was fired')
})
myEmitter.on('TEST_EVENT', () => { //this declares an event here
    console.log('TEST_EVENT was fired')
})
//myEmitter.emit('TEST_EVENT') //this calls the object
