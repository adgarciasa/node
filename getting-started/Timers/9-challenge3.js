let counter = 0

const intervalId = setInterval(() => {
    console.log('Hello World')
    counter += 1

    if (counter === 5) {
        console.log('Done')
        clearInterval(intervalId)
    }
},1000 * this.counter)

/*
 * Print "hello world" forever. starting with a delay of 1 second
 * But then incrementing the delay by 1 second each time.
 * The second time will have a delay of 2 seconds
 * Third time will have a delay of 3 seconds
 */
