var str = 'This is a string'
console.log(str.charAt(5))
console.log(str[5])


// How to find the length of a string
var length = 0

while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(length)

// Built-in system of finding length of a string

console.log(str.length)
console.log('jfdfdshfs hhhhgggfvhs'.length)