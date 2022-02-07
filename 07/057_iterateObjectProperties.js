var obj = {
    x: 10, 
    y: 20,
    z: 30,
    // p: 30
}
var p = 10

// "in" operator is used to see that whether an object does have that specific property or not
console.log('x' in obj)
console.log('p' in obj)

// for in loop.........here i means properties of the object i.e. x,y,z are the properties of the object "obj"
for (var i in obj) {
    console.log(i)
    console.log(i + ': ' + obj[i])
}