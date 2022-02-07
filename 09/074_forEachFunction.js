// ForEach function is used to traverse an array

var arr = [1, 2, 3, 4, 5]

var sum = 0
arr.forEach(function (value, index, arr) {
    console.log(value, index, arr)
    sum += value
    // arr[index] = value /*arr[index]*/ + 10
    if (value % 2 === 0) {
        console.log(value)
    } else {
        console.log(value)
    }
})

// Here sum is giving us the total summation of the array
console.log(sum)
// console.log(arr)


//----------------------------------------------------------------------


// function forEach(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//         sum += arr[i]
//     }
//     return sum
// }

// forEach(arr)
// console.log(sum)


//----------------------------------------------------------------------


function customForEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}


customForEach(arr, function (value, index, array) {
    console.log(value, index, array)
})


var sum = 0
customForEach(arr, function (value, index, array) {
    sum += value
})
console.log(sum)


customForEach(arr, function (value, index, array) {
    array[index] = value + 5
})
console.log(arr)


customForEach(arr, function (value, index, array) {
    if (array[index] % 2 == 0) {
        console.log(array[index] + ' ' + 'is even number')
    } else {
        console.log(array[index] + ' ' + 'is odd number')
    }
})
