/** This is Destructuring
 * 
 */

// const  PI = Math.PI
// const E = Math.E
// const SQRT2 = Math.SQRT2
// those 3 things in a single line

const { PI, E, SQRT2 } = Math

// With require
// const { readFile } = require('fs')

// This works even into arguments in functions

/**circleArea(circle) //llama la funcion cirle area y al argumento cirle ya delarados arriba
 * 
 */
const circle = { //objeto
    label: 'circleX',
    radius: 2,
}

// { precision = 2 } = {} // this allows to change the value of precision
const circleArea = ({ radius }, { precision = 2 } = {}) => 
    (PI * radius * radius).toFixed(precision)

console.log(circleArea(circle))
console.log(circleArea(circle, { precision: 5 }))

const [first, second,, forth] =  [10, 20, 30, 40]