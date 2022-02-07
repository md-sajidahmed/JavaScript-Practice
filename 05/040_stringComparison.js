var a = 'abc'
var b = 'bcd'

console.log(a === b)
console.log(a > b)
console.log(a < b)

/* In JS, while doing comparison between two strings, small letter alphabets are considered as greater than the capital letter alphabets.
And, the descending order is z, y, x, w, v, u,......................, d, c, b, a, Z, Y, X, W, V, U,......................, D, C, B, A.
That means "z" is the biggest alphabet and "A" is the smallest alphabet in String Comparison of JS.

Like:   i)      "z" is greater than "a"
        ii)     "a" is greater than "Z"
        iii)    "Z" is greater than "A"
*/

/* If we compare a string with a number, that string will be first converted to number automatically (known as implicit conversion) and then that converted string and
the number will be compared */

// Here 001 and 1 are same. That's why the result is coming true
var x = '001'
var y = 1
console.log(x == y)

// But if we use three equal sign, the datatype is checked also. That's why it is returning false since both datatype is different.
// One is string and another oen is number
console.log('001' === 1)