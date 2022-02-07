var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Insert 10 to index 3

// // But 4 has removed from the array
// arr[3] = 10


// Push method pushes a number at the last of an array
arr.push(9)
console.log(arr)


// Unshift method puts a number at the beginning of an array
arr.unshift(0)
console.log(arr)


// Shift method removes 1st element of the array
// arr.shift()
// console.log(arr)



//******************* Insertion of data in an array **************************

/* Here:    i)      "3" indicates the index number of an array where we want to insert a data
            ii)     "0" indicates that we want to remove 0 data (means  no data) in an array. If we wrote 2 in place of 0, then 2 data from index 3 (3 & 4) would have been removed
            iii)    "17" is the number we want to insert at index 3 of the array. We can also insert multiple number like "17" & "45"
*/
arr.splice(3, 0, 17, 45)
console.log(arr)



//********************* Removal of data from an array**************************

// Here data is removed from the array but that index is occupying a space telling undefined and length of the array also remains same
// arr[3] = undefined


// Pop function removes element from the last index of an array
// arr.pop()


// shift function removes element from the 1st index of an array
// arr.shift()


/* Here:    i)      "1" indicates that we want to remove only one data from index 3
            ii)     At index 3, we want to insert number "26"
            */
           
arr.splice(3, 1, 26)
console.log(arr)


