/* Hoisting: Where & when a variable is declared and when its value will be assigned
             Where a function is stored in the data structure with a ref value and where it is called */


var a = 100
// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print(a) {
    console.log(a)
}

print(a)


// creation phase
// var a = undefined
//var newPrint = undefined
// function print = ref value

// execution phase
// a = 100
// -------------------------------------------- newPrint = undefined     [So, newPrint is not a function]
// print(10) = console.log(10) = 10
// newPrint = ref of print     [Here, function print is passed to newPrint as a ref value. So, ref value of print and newPrint is same]
/* So, If newPrint is called with any argument, that argument will be passed to the function print searching by its ref value
   newPrint(45) = print(45) = console.log(45) = 45 */
// print(a) = console.log(100) = 100        [At the beginning, var a is defined that is 100]