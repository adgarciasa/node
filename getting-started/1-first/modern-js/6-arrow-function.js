//como puedes ir convirtiendo tu funcion en arrowfunct

const square = function(a) {
    return a * a
}

const square = (a) => {
    return a * a
}

const square = (a) => a * a

const square = a => a * a

//ejemplo de coomo usar una arrow funct
[1,2,3,4,5,6].map(a => a * a)