var arr = [3, 8, 1, 4, 9]

for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}

console.log(arr)



var arr1 = [1, 2, 3, 4, 5]
console.log(arr1.reverse())