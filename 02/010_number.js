// If we directly put number in any variable then this process is called number literal.
var x = 25
var y = 10
console.log(x, y)
console.log(x+y)

// Here Number is called 'constructor'
var a = Number(17.03)
console.log(a)

// Here a string is converted to number
var b = Number('817.26')
console.log(b)

// Any number can be converted to integer number
console.log(Number.parseInt(a))

// Any number can be converted to floating number
console.log(Number.parseFloat(b))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log (Number.MAX_VALUE)

console.log(1/0)

// NaN means "not a number"
console.log('abc' * 10)
console.log('abc' + 10)