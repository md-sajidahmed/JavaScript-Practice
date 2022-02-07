// if any data comes into a scope of a function from another scope (it can be another function scope or global scope) and which does not come as the argument of the function, then that scope is called closure

var b = 10

function a() {
    var x = 17

    return function () {
        console.log(x)
        console.log(b)
    }
}

var c = a()
console.dir(c())