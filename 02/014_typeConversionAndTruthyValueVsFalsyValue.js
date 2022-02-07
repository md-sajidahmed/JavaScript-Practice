/********************** Type conversion **********************/

var str = '10'
var n = 10

/* Though 'str' is a string and 'n' is a number, if they are multiplied, correct answer is got because here implicit conversion
is taking place. Implicit conversion means automatic conversion. */
console.log(str * n)

// But while addition implicit conversion is not happening. So, we need to convert 'str' variable into number.
console.log(str + n)

// Here a string is converted into number with "Number constructor"
console.log(Number(str))
console.log(Number(str) + n)

// Converting a string into integer
var str1 = '114.9045'
console.log(Number.parseInt(str1))


// Here a number is converted into string with "String constructor"
console.log(String(n))

// Converting a number into string
console.log(n.toString())

// Infinity can not be converted into number
console.log(Number(Infinity))

// But infinity can be converted into string
console.log(String(Infinity))

/*****************************************************************/



/**********************  Truthy value Vs Falsy value **********************/

// Boolean returns true for infinity because boolean is considering infinity a number and boolean returns true normally
console.log(Boolean(Infinity))
console.log(Boolean(817))
console.log(Boolean('Sajid'))
console.log(Boolean(Sajid))

// But by default boolean returns false for some value.
/* Falsy values: i)     ''   (empty string)
                 ii)    0
                 iii)   null
                 iv)    undefined
                 v)     NaN (not a number)
 */

 console.log(Boolean(''))
 console.log(Boolean(undefined))
 console.log(Boolean(NaN))


