/* Here with "sample" function we can do only add operation of "c" and "d". If we want to do subtraction of "c" and "d", then we have 
to declare another "sample" function where we can do subtraction of "c" and "d". 
So, for each operation, we have to create a separate function which is a repetition of same function with a little change in 
variable name "output". So, we can avoid this repetition creating a callback function */

// function sample(a, b) {
//     var c = a + b
//     var d = a - b
//     var output = sum(c, d)
//     return output
// }

// function sum(a, b) {
//     return a + b
// }

// var result  = sample(8, 3)
// console.log(result)



/*-------------------------------------------------------------------------*/

// If we pass a function as an argument, that function is called callback function.

function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    //console.log(c) ----------------------------------------------- PROBLEM IN OUTPUT
    var output = cb(c, d)
    return output
}

function sum(a, b) {
    return a + b
}

var result1 = sample(8, 3, sum)
console.log(result1)

var result2 = sample(8, 3, function (c, d) {
    // console.log(c, d)
    return c - d
})
console.log(result2)

var result3 = sample(8, 3, function (c, d) {
    // console.log(c, d)
    return c * d
})
console.log(result3)

var result4 = sample(8, 3, function (c, d) {
    // console.log(c, d)
    return c / d
})
console.log(result4)