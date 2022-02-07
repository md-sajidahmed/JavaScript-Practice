var a = 'abc'

if (true) {
    if (true) {
        // Here "a" is accessible cuz "a" is a global variable declared here 
        console.log(a)
        var b = 'I am b'
    }
}

// Here "b" is accessible though "b" is declared inside if condition
console.log(b)



function x() {
    var a = 817
    function y() {
        var a = 10
        console.log(a)
        console.log(b)
    }
    y()
    console.log(a)
}

x()
console.log(a)


function test(n) {
    function a() {
        return n % 3 == 0
    }
    function b() {
        return n % 5 == 0
    }

    if (a() && b()) {
        console.log(n + ' is divisible by 3 & 5')
    } else {
        console.log(n + ' is not divisible by 3 & 5')
    }
}

test(15)
test(17)