var arr = [4, 5, 6, 7, 8]


// Adding 1 with every numbers in a array
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    arr[i] = arr[i] + 1
    console.log(arr[i])
}

console.log(arr)


// Sum of numbers of array
var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)


// Even numbers in array
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}


// Sum of even numbers in array
var sumOfEvenNumbers = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sumOfEvenNumbers += arr[i]
    }
}
console.log(sumOfEvenNumbers)