// If we directly put string in any variable then this process is called string literal.
var str1 = 'Md. Sajid Ahmed'
var str2 = "Sajid"
var str3 = `Sajid Ahmed`


// Here String is defined by 'string constructor'
var str4 = String('Md. Sajid Ahmed')
console.log(str4)

// Here a number is converted to string
var str5 = String(817)
console.log(str5)

var str6 = String(114.9045 )
console.log(str6)

console.log(str1, str2, str3)
console.log(str4, str5, str6)

// String + Number = string
console.log('I like ' + 69)