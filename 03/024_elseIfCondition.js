var a = 10
var b = 10
console.log(Math.max(a,b))

if (a > b) {
    console.log('a is greater than b ; ' + a + ' > ' + b)
} else if (b > a) {
    console.log('b is greater than a')
} else {
    console.log('a is equal to b')
}


var n = 0

if (n === 0) {
    console.log(n + ' is zero')
} else if (n % 2 === 0) {
    console.log('n is an even number')
} else {
    console.log('n is an odd number')
}



/***************** How to find out the name of the day *****************/

var date = new Date()

// 0 = sunday,  1 = monday
var today = date.getDay()

console.log(today)

if (today === 0) {
    console.log('Today is Sunday')
} else if (today === 1) {
    console.log('Today is Monday')
} else if (today === 2) {
    console.log('Today is Tuesday')
} else if (today === 3) {
    console.log('Today is Wednesday')
} else if (today === 4) {
    console.log('Today is Thursday')
} else if (today === 5) {
    console.log('Today is Friday')
} else if (today === 6) {
    console.log('Today is Saturday')
}

/************************************************************************/