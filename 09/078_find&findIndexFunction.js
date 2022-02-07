var arr = [9, 2, 5, 6, 0, 1, 90, 8, 3, 7, 4]

var result1 = arr.find(function (value) {
    return value === 6
})

console.log(result1)


var result2 = arr.findIndex(function (value) {
    return value === 6
})

console.log(result2)



//-----------------------------------------------------------



function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb (arr[i])) {
            return arr[i]
            // return i
        }
    }
}

var output1 = myFind(arr, function (value) {
    return value === 6
})

console.log(output1)


