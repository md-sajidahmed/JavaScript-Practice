function add(a, b) {
    return a + b
}

// 1. A function can be stored in a variable 
var sum = add
console.log(sum(4, 5))


// ---------------------------------------------------


function add1(a, b) {
    return a + b
}

var sum1 = add1(6, 8)
console.log(sum1)


//----------------------------------------------------


function addition(a, b) {
    console.log(a + b) 
}

addition(4, 5)