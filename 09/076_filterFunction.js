var arr = [4, 7, 2, 5, 9, 1, 8, 6, 3, 0]

var filteredArr = arr.filter(function (value) {
    // return value % 2 === 0
    if (value % 2 === 0 && value > 0 && value < 8) {
        return value
    }
})

console.log(filteredArr)


//---------------------------------------------------------------------------


// function myFilter (arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }
//     }

//     return newArr
// }

// console.log(myFilter(arr))



//----------------------------------------------------------------------------



function myFilter (arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb (arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

var evenArr = myFilter(arr, function (value) {
    return value % 2 === 0
})

var oddArr = myFilter(arr, function (value) {
    return value % 2 === 1
})

console.log(evenArr)
console.log(oddArr)