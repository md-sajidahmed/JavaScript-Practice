// Function declaration

abc()

function abc() {
    console.log('I am Sajid')
}


// Function expression
//Here, function is stored in a variable. This function is anonymous, has no name. Only that variable has a name.

//newAbc()  // ans: newAbc is not a function. Because, in the creation phase, newAbc is declared as a variable not a function
            // Since newAbc is a variable, not a function, it will be undefined. And nothing like undefined can be called as a function.

var newAbc = function () {
    console.log('I am a new function')
}

newAbc()



// Creation phase
// abc = ref
// newAbc = undefined

// Execution phase
// In the execution phase, a function is assigned in the variable newAbc instead of "undefined" and now newAbc is a function.

// So, in case of function declaration, we can call the function from anywhere of the global scope
// But, in case of function expression, we have to call function after the function expression is written