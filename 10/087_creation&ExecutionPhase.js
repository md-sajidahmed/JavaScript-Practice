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

/* In the creation phase, all the variables declared are stored in an object type data structure and assigned with a value "undefined".
And also all the functions declared, their names are stored in an object type data structure with a reference value created under the 
function name. Side by side scope chain is also maintained in this phase*/

/* And all the loops, conditions, variable value assigning and functions will be executed in the execution phase*/