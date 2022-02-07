// Scope is the system which stores data in a variable

// when a context is created, a variable is declared.

function a() {
    var x = 100
    console.log(x)
}

// Who has access in the context of the above function is controlled by a system called scope.

a()
console.log(x)

/* When a function is invoked, a new context is created for that function and in that context we can declare any variable. 
And the scope of that variable is the function itself. If we get out of this context, the variable will not be visible anymore. */


var x = 55

function test() {
    var x = 45
    console.log(x)

    function nested() {
        var y = 65
        console.log(x)
    }

    // console.log(y)
    nested()
}

test()

