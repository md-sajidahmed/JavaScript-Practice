// If we want to skip some definite value or iteration (traverse through anything like an array) inside a loop, we can use "continue" statement 

for (var i = 0; i < 10; i++) {
    if (i === 3 || i === 7) {
        continue
    } else {
        console.log(i)
    }
}