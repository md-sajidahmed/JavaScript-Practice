/* Pure function:
   => It returns the same result if given the same arguments
   => It does not cause any observable side effects
*/

function sq(n) {
    return n * n
}

console.log(sq(2))



var n = 10
function change() {
    n = 100
}

// The value of "n" has not been changed since function "change()" has not been called yet.
console.log(n)

// function "change()" has changed the value of "n". This way it is creating an effect on the value of "n". 
//So, "change()" can not be a pure function
change()
console.log(n)



var point = {
    x: 45,
    y: 30
}

function printPoint(point) {
    point.x = 100
    point.y = 200
}
console.log(point)

printPoint(point)
console.log(point)

