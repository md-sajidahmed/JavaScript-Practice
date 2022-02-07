/* for (initializer; condition; increment/decrement) {
        body
} */


// Whenever you do know how long you are going to run the loop, in that case you have to run for loop

for (var i = 0; i < 10; i++) {
    console.log((i + 1) + '. ' +  'Sajid')
}



for (var i = 1; i <= 100; i++) {
    console.log(i)
}



for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}



var sum = 0
for (var i = 1; i <= 10; i++) {
    console.log(sum + '+' + i +  '=' + (sum + i))
    sum += i
    console.log(sum)
}
console.log('result ' + '= ' + sum)



var sum = 0
for (i = 0; i <= 10; i += 2) {
    console.log(sum + '+' + i +  '=' + (sum + i))
    sum += i
    console.log(sum)
}
console.log('result ' + '= ' + sum)



var sum = 0
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i + ' + ' + sum + ' = ' + (sum + i))
        sum += i
    }
}
console.log('result' + ' = ' + sum)




var x = 5

for (var i = 1; i <= 10; i++) {
    console.log(x + ' x ' + i + ' = ' + (x * i))
}