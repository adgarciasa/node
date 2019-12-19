let counter = 0

const intervalId = setInterval(() => {
    console.log('Hello World')
    counter += 1

    if (counter === 5) {
        console.log('Done')
        clearInterval(intervalId)
    }
},1000)

/**
 * Es un loop infinito que dice helloworld
 * cada pasada counter aumenta en 1
 * Cuando llega a 5 entra a decir Done
 * Y limpia el interval, por lo que lo detiene.
*/

/*
- Print "Hello World" 
- Every second
- And stop after 5 times

- After 5 times. Print "Done" and let Node exit.
*/
