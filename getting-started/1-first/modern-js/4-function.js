const X = function () { //regular function
    // "this" is the caller of X
}

const Y = () => {
    // "this" here is not the caller of Y 

    //Its the same "this" found in Y's scope
}