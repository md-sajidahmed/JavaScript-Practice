// Currying is actually a design pattern of coding structure.
/* Currying method is used while dealing with multiple arguments of a function.It just break down a function with multiple arguments into a many functions with a single argument for making the task of the function easier. */

function currying (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

var result = currying(10)(20)(30)
console.log(result)