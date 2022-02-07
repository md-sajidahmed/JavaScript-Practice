var arr = [4, 2, 7, 6, 8, 4, 45, 9, 89, 27]
var find  = 45

// Here "Data not found" is printed so many times where we only want to print this line only once
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('Data found at index ' + i)
        break;
    } else {
        console.log('Data not found')
    }
}



var isFound = false
var number = 45

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('Data found at index ' + i)
        isFound = true
        break;
    }
}

if (!isFound) {                  // if isFound is false. 
    console.log('Data not found')
}

/* if (isFound) {                //means if isFound is true
    ......................
} */
