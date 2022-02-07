var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

var arr = [4, 8, 1, 6, 7, 9, -8, 0, -8, 0, -2, 4, 4, 3, 5, 6, 8, 2, 1, 7, -4]


/*---------------------------- Sort function ------------------------------------*/

// Sort function is used to write anything in ascending or descending order

arr.sort()
console.log(arr)

persons.sort
console.log(persons)


// Here the function with parameter a & b is a call back function

arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
})

console.log(arr)


persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)


persons.sort(function (a, b) {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)


/*------------------------------- Every function -------------------------------------*/

// Every function does always return Boolean value if each & every value matches with the condition declared in the call back function

var arr2 = [4, 8, 1, 6, 7, 9, 8, 0, 2, 4, 4, 3, 5, 6, 8, 2, 1, 7]

var res1 = arr2.every(function (value) {
    return value % 2 ===0 && value >= 0 
})

console.log(res1)

var res2 = arr2.every(function (value) {
    return value >= 0 
})

console.log(res2)


/*------------------------------- Some function --------------------------------------*/

// Some function does always return Boolean value if at least one value matches with the condition declared in the call back function

var arr3 = [4, 8, 1, 6, 7, 9, 8, 0, 2, 4, 4, 3, 5, 6, 8, 2, 1, 7]

var res3 = arr3.some(function (value) {
    return value % 2 === 1 && value < 0
})

console.log(res3)

var res4 = arr3.some(function (value) {
    return value >= 0
})

console.log(res4)
