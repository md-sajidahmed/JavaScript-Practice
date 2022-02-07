var obj = {
    x: 10, 
    y: 20,
    z: 30
}

// Here "dot" notation is used
console.log(obj.x)
console.log(obj.y + obj.z)

// Here "array" notation is used
console.log(obj['z'])

var show = 'x'

// In obj, there is no properties name show
console.log(obj.show)

// x is stored in variable show as a string. In array notation, inside the 3rd bracket it accepts string.
console.log(obj[show])

