function functionName() {
    console.log('This is a function')
}

function  add() {
    var a = 10
    var b = 20
    console.log(a+b)
}

function sub() {
    var a = 20
    var b = 10
    console.log(a-b)
}

for (var i = 0; i < 10; i++) {
    functionName()
}

add()

sub()