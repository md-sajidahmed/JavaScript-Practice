// 1. We can pass function as an argument

// 2. We can return a function from another function



function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b
    
    function multiply() {
        var m = func(a, b)
        return c * d * m
    }

    // We can directly return a function from another function
    return multiply
}

// We are passing a function name "add" as an argument of another function name "manipulate" to the parameter name "func"
var into = manipulate(3, 4, add)
console.log(into())




/*-------------------------OR-------------------------------*/

function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    var c = a + b
    var d = b - a
    
    // We can directly return a function from another function
    return function () {
        var m = func(a, b)
        return c * d * m
    }
}

// We are passing a function name "add" as an argument of another function name "manipulate" to the paramter name "func"
var into = manipulate(2, 4, add)
console.log(into())

