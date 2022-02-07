// Here, no function name is declared. A function without name is called anonymous function.
var addition = function (a, b) {
    return a + b
}

// For anonymous function, we have to declare the function always with the arguments.
console.log(addition(10, 20))


setTimeout(function() {
    console.log('I will return after 3 seconds')
}, 3000)


// Here output of this expression was suppose to be the last output. But it was not. This behaviour is known as asynchronous behaviour.
var another = addition
console.log(another(2, 3))


