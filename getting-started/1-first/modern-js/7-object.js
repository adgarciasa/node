const mystery = "answer"

const PI = Math.PI

const obj = {       // Los objetos soportan
    p1: 10,         // Variables
    p2: 20,
    f1() {},        // Funciones
    f2: () => {},   // Arrow-functions
    [mystery]: 43,  // dinamic properties
    //PI: PI
    PI,
}

/**
 * With dinamic properties you can declare a variable
 * you must use the value or identificator of the variable
 * to see real value inside the obj
 */