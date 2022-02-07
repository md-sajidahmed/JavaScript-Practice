var obj = {
    x: 10, 
    y: 20,
    z: 30,
    a: 45
}

// Here value of "a" has been removed, not the property 
obj.a = undefined
console.log(obj)

// Delete function can be used to delete any property from any object
delete obj.a
console.log(obj)