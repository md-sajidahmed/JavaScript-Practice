function add(a, b) {
    return a + b
}

// 1. A function can be stored in a variable 
var sum = add
console.log(sum(4, 5))
console.log(typeof sum)


// 2. A function can be stored in an array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))
console.log(typeof arr)


// 3. A function can be stored in an object
var obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(7, 8))


// 4. We can create function as we need
setTimeout(function () {
    console.log('I have created...............')
}, 1000);

