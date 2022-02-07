// Lexical scope comes from the term "lexing". Lexing is a phase of a compiler which tokenize the code. 
// Example: var x = 25. Here, in the lexing phase, "var" will be converted into a token, then "x", then "=" and at last "55".
// And, when JS engine tokenize a code, that time it also defines the scope for that code which is called lexical scope.
/* In the code, we can see "nested" function can access the variables declared in its parent function "test" and also can access the
global variables. And this can happen only for lexical scope which has been defined while tokenizing the code in the lexing phase*/

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