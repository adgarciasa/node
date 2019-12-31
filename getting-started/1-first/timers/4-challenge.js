const rocks = who => {
    console.log(`Hello after ${who} seconds`)
}

setTimeout(rocks, 4 * 1000, "4")
setTimeout(rocks, 8 * 1000, "8")


//how the couse did
const theOneFunc = delay => {
    console.log('Hello after ' + delay + ' seconds')
}
setTimeout(theOneFunc, 4 * 1000, 4)
setTimeout(theOneFunc, 8 * 1000, 8)