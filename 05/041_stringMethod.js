// String concatenation 

var a = 'I am'
var b = 'Sajid Ahmed'
var c = '& age 25'

var d = a.concat(' ',  b).concat(' ' + c + ' years')
console.log(d)

console.log(d.charAt(0))
console.log(d.charAt(5))

console.log(d.startsWith('I am'))
console.log(d.endsWith('25'))

console.log('abc'.toUpperCase())
console.log(d.toLowerCase())


// To remove unwanted space at the beginning and end of the string 
console.log(' cjdj    vbbv            vbdbvbdhvb '.trim())


// To convert a string into array or a sentence to words individually
console.log(d.split(' '))


/* In string, the 1st character or index starts with 0 then next character or index 1 and so on. And, "11" is the length or the number 
of total index picked up from a string where a space is also counted as a index */
var i = d.substr(5, 11)
console.log(i)



// If the length is not mentioned, then the all the character of the string will be printed starting from index number "5"
var j = d.substr(5)
console.log(j)



// reverse an array

var string = 'sajid ahmed'
var arr = string.split('')  // converts the string into array
console.log(arr)
console.log(arr.reverse())  // reverse the array
console.log(arr.join(''))   // converts the array into string




