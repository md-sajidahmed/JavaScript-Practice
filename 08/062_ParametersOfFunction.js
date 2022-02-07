// Here "a" and "b" are known as parameters of function
function add(a, b) {
    var result = a + b
    console.log(result)
}

add(10, 20)
add(7, 3)


arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
arr3 = [5, 7, 8]

// Here "arr" is a parameter of function
function sumOfArray(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

// Here "arr1", "arr2" and "arr3" are known as argument of function because three of them store real data given by the user
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)