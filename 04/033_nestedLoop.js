// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


var n = 5
for (i = 1; i <= n; i++) {
    var result = ''
    for (j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}
// console.log(result)



// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


var n = 5
for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= n; j++) {
        result += '* '
    }
    console.log(result)
}



// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20


for (var i = 2; i < 3; i++) {
    for (j = 1; j < 11; j++) {
        console.log(i + ' x ' + j + ' = ' + i * j)
    }
}

