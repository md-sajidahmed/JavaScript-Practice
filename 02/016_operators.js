//How to find out the type of the operator
console.log(typeof 10)
console.log(typeof 'Sajid')

// ********** Arithmetic operator **********

// Arithmetic operators: +   -   *   /   %   ++   --

// Modulus operator is used to find out the remainder while division
console.log(10 % 3)

var a = 6
var b = 5

/* Post-incremental: At first var 'a = 6' is printed in the console. Then the operation is done adding 1 to 6 & it becomes 7.
That's why addition is not visible here */
console.log(a++)
console.log(a)

/* Pre incremental: Here the addition operation is done at the beginning then the value of the variable is printed */
console.log(++a)
console.log(++b)

var x = 4
var y = 3

/* Post decremental: At first var 'x = 3' is printed in the console. Then the operation is done subtracting 1 from 3 & it becomes 2.
That's why subtraction is not visible here */
console.log(x--)
console.log(x)

/* Pre decremental: Here the subtraction operation is done at the beginning then the value of the variable is printed */
console.log(--x)
console.log(--y)

//******************************************



// ********** Assignment operator **********

//Assignment operator: =   +=   -=   *=   /=   %=

var m = 20
var n = 12

// m += n that means m = m + n; m = 20 + 12 = 32. So m = 32
m += n
console.log(m)

// m -= n that means m = m - n; m = 32 - 12 = 20. So m = 20
m -= n
console.log(m)

// m *= n that means m = m * n; m = 20 * 12 = 240. So m = 240
m *= n
console.log(m)

// m /= n that means m = m / n; m = 240 / 12. So m = 20
m /= n
console.log(m)

// m %= n that means m = m % n; m = 20 % 12. So m = 8
m %= n
console.log(m)

//******************************************



// ********** Comparison operator **********

//When we will use comparison operator, it will always return Boolean value either 'True' or 'False'
//Comparison operator: ==   !=   >   <   >=   <=

var i = 30
var j = 33

console.log(i == j)
console.log(i >= j)
console.log(i <=j)
console.log(i != j)

var i = 30
var j = '30'

/*Though the data type of variable i & j is different (var i is a number where as var j is a string), they are equal using '==' operator.
Here implicit conversion has taken place. Here only the value is checked, not the data type. The value of 'i' & 'j' is same that is 30.
So, this '==' operator is not enough to find out the relationship between two data types.*/
console.log(i == j)

//That's why we will use these '==='   '>=='   '<=='   '!==' operators which will check both the data type and the value of the variables.
console.log(i === j)
console.log(i !== j)


//******************************************



// ********** Logical operator **********

/*Logical operator: i)     && (System will return true if two conditions are true)   
                    ii)    || (System will return true if any one condition is true)   
                    iii)   !  (System will return a value which is opposite to the value got from the condition)
*/
//******************************************



// ********** Bitwise operator **********

//These operators are only binary operation.
//Bitwise operator: &(AND operator)   |(OR operator)   ~(NOT operator)   ^(XOR operator)   <<(Left shift operator)   >>(Right shift operator)

//******************************************