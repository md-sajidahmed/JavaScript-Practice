var arr = [
    [78, 85, 89, 93],
    [87, 65, 96, 84],
    [89, 91, 92, 82],
]

console.log(arr)
console.log(arr.length)

console.log(arr[0].length)

console.log(arr[0][0])
console.log(arr[1][3])

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log('Element of index ' + i + ' is ' + arr[i][j])
    }
}

