var arr = [4, 5, 6, 7, 8]

// This is how we can separate in between the elements of the array with different sign or notation or space
console.log(arr.join(' '))
console.log(arr.join(', '))
console.log(arr.join(' | '))

// "Fill" function is used to fill up an array with different element
arr.fill(3)
console.log(arr)



var arr1 = [1, 2, 3, 4, 5]
var arr2 = [6, 7, 8, 9, 10]

// In this way, we can merge two arrays
var arr3 = arr1.concat(arr2)
console.log(arr3.join(', '))




// "isArray" function is used to check whether it is array or not
console.log(Array.isArray(arr3))

// cloning an array
var x = [1, 2]
var y = x

y[0] = 5

/* Though we have not changed any of the elements of array x, but a change has taken place at index 0 of array because we have declared
"array y = x & 1st element of array y have been changed to 5" */
console.log(x)
console.log(y)

// So to clone an array perfectly "Array.from" is used
var a = [1, 2]
var b = Array.from(a)

b[0] = 5

console.log(a)
console.log(b)