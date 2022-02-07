// Print 1 to nth numbers with recursion
function printNumbers(n) {
    if (n === 0) {
        return
    }

    printNumbers(n-1)

    console.log(n)
}

printNumbers(5)



// Print n to 1 numbers with recursion
function reversePrintNumbers (n) {
    if (n === 0){
        return
    }

    console.log(n)

    reversePrintNumbers(n-1)
}

reversePrintNumbers(5)



// Print odd numbers from 1 to nth numbers with recursion
function printOddNumbers(n) {
    if (n === 0) {
        return
    }

    printOddNumbers(n - 1)
    
    if (n % 2 === 1) {
        console.log(n)
    }
}

printOddNumbers(10)


// Another process
function printfNumbers(n) {
    if (n < 0) {
        return
    }

    printfNumbers(n - 2)
    
    console.log(n)
}

printfNumbers(10)



// Summation of n numbers
var result = 0

function sum(n) {
    if (n === 0) {
        return
    }

    sum(n-1)
    return result += n
}

console.log(sum(5))


/* Another process */
function sum2(n) {
    if (n === 0) {
        return 0
    }

    return n + sum2(n-1)
}

console.log(sum2(5))



// Summation of m numbers to n numbers

function sum3(m, n) {
    if (m > n) {
        return 0
    }

    sum3(m+1, n)
    return sum3(m+1, n) + m
}

console.log(sum3(2, 5))

// Explanation
// sum(2,5)     return  sum(3,5)+2   = 12+2 = 14
// sum(3,5)     return  sum(4,5)+3   = 9+3 = 12
// sum(4,5)     return  sum(5,5)+4   = 5+4 = 9
// sum(5,5)     return  sum(6,5)+5   = 0+5 = 5
// sum(6,5)     return  0


/* Another process */

function sum3(m, n) {
    if (m > n) {
        return 0
    }

    return sum3(m+1, n) + m
}

console.log(sum3(2, 5))

// Explanation
// sum(2,5)     return  sum(3,5) + 2     = 12+2 = 14
// sum(3,5)     return  sum(4,5) + 3     = 9+3 = 12
// sum(4,5)     return  sum(5,5) + 5     = 5+4 = 9
// sum(5,5)     return  sum(6,5) + 5     = 0+5 = 5
// sum(6,5)     return  0

console.log( + 5)



//Summation of an array

var arr = [1, 2, 3, 4, 5]

function sumOfArray (arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }

    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1))

// Explanation
// sumOfArray(arr, 5-1 = 4)        return  arr[4] + sumOfArray(arr, 4-1 = 3)       = 5+10 = 15
// sumOfArray(arr, 3)              return  arr[3] + sumOfArray(arr, 3-1 = 2)       = 4+6 = 10
// sumOfArray(arr, 2)              return  arr[2] + sumOfArray(arr, 2-1 = 1)       = 3+3 = 6
// sumOfArray(arr, 1)              return  arr[1] + sumOfArray(arr, 1-1 = 0)       = 2+1 = 3
// sumOfArray(arr, 0)              return  arr[0] + sumOfArray(arr, 0-1 = -1)      = 1+0 = 1
// sumOfArray(arr, -1)             return 0  