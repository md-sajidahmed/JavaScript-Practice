//   &&   ||   !

var a = 40
var b = 30
var c = 20
var d = 10

if (a > b && c > d) {
    console.log('a is greater than b and c is greater than d')
} else {
    console.log('mara khao')
}

if (a > b || d > c) {
    console.log('a is greater than b and d is greater than c')
} else {
    console.log('muri khao')
}

// This "!" sign is converting false into true
var check = !(b > a)
console.log(check)