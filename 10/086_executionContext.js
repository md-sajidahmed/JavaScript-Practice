function a() {
    b()
    console.log('I am function a')
}

function b() {
    c()
    console.log('I am function b')
}

function c() {
    d()
    console.log('I am function c')
}

function d() {
    console.log('I am function d')
}


var x = 100
a()
console.log('I am global context & and x am a global variable')


// Execution of Function D context
// Execution of Function C context
// Execution of Function B context
// Execution of Function A context
// Execution of global context