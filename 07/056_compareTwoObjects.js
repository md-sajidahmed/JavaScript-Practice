var obj1 = {
    x: 10, 
    y: 20,
    z: 30
}

var obj2 = {
    x: 10, 
    y: 20
}

// We can not compare two objects with the conventional method of JS like the process shown below
console.log(obj1 == obj2)

// We have to compare each and every properties of two objects
if (obj1.x == obj2.x && obj1.y == obj2.y) {
    console.log(true)
} else {
    console.log(false)
}

// It is very annoying to compare each & every properties of two objects one by one.
// So, "JSON.stringify" is used to convert the object into string. Then we can compare two object.

// It is giving us "False" because in "obj1" there is an property name "z" which is missing in "obj2"
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))



