// A function declaring with in another function declared in the global scope is called inner function or nested function

// Inner function has the access to the variable or parameter of the main function. Thats why we did not pass any arguments to the inner function "sayHey()"

function anything(greet, name) {
    function sayHey() {
        console.log(greet, name)
    }

    sayHey()
}

anything('Good morning', 'Sajid Ahmed')




function something(greet, name) {
    function getFirstName() {
        if(name) {
            return name.split(' ')[0]
        }
        else {
            return ''
        }
    }
    var text = greet + ' ' + getFirstName()
    console.log(text)
}

something('Good morning', 'Sajid Ahmed')





function something(greet, name) {
    function getFirstName() {
        if(name) {
            return greet + ' ' + name.split(' ')[1]
        }
        else {
            return ''
        }
    }
    return getFirstName()
}

console.log(something('Good morning', 'Sajid Ahmed'))



