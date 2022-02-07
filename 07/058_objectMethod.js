var obj = {
    x: 10, 
    y: 20,
    z: 30
}

// To see the properties of an object in form of an array
console.log(Object.keys(obj))

// To see the values stored in the properties of an object in form of an array
console.log(Object.values(obj))

// To see the values stored in the properties & also the properties of an object in form of an multi-dimensional array
console.log(Object.entries(obj))


// How to create an object from another declared object
var obj2 = Object.assign({}, obj)
obj2.x = 45

console.log(obj2)
