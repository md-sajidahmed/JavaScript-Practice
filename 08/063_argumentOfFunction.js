// Arguments is a array like data structure. It acts like an array

function test(a, b, c) {
    console.log(arguments)
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

test(10, 20, 30)

console.log('\n')

/* While declaring function with arguments, parameters are not needed to be called. If we want to do an operation where we do not know
that how many variables we have to work with, this method is needed to that kind of operation */

function addAll() {
    var sum = 0
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        sum += arguments[i]
    }
    console.log(sum + '\n')
}

addAll(1, 2, 3, 4, 5)
addAll(5, 17, 45, 69, 817)

