// When we provide an output of an function as an input of another function, that is called function composition.

function print(input) {
    console.log(input)
}

function multiplyByFive(n) {
    return n * 5
}

function add(a, b) {
    return a + b
}

print(multiplyByFive(add(3, 5)))