var obj = {
    x: 10, 
    y: 20
}

var obj1 = {
    a: 50,
    b: 80
}

obj.x = 45
obj.z = 30
console.log(obj.x, obj.z)

// Because we did not define any property name "a" in object "obj"
console.log(obj.a)


obj['y'] = 70

var point = 'a'
obj[point] = 817
console.log(obj1[point])


console.log(obj)

