// Closure is a system when a function is able to remember and access its lexical scope

// function test() {
//     var msg = 'I am learning lexical scope and closure'

//     function sayMsg() {
//         console.log(msg)
//     }

//     sayMsg()
// }

// test()



// Even when that function executing outside it's lexical scope

// function test2() {
//     var msg = 'I am learning lexical scope and closure'

//     return function () {
//         console.log(msg)
//     }
// }

// var sayMsg = test2
// console.log(typeof sayMsg)
// sayMsg

/* "msg" text is inside the "test2" function and we are executing another function declared inside the "test2" function.  
But that function is called outside of lexical scope of "test2" function i.e; in the global scope with "function expression" */








// -------------------------- Learn with Sumit-----------------------------------------//


// -------- Case: 1-----------//

// Closure defines how child scope gets every properties of parent scope into it

/* Closure gives you access to an outer function's scope from an inner function. In js, closures are created every time a function
is created, at function creation time */

// let n1 = 2

// let sum = function () {
//     let n2 = 3
//     let str = 'Closure explains the scoping behaviour of JavaScript'
//     return function () {
//         console.log(str)
//         return n1 + n2
//     }
// }

// let myFunc = sum()
// console.log(myFunc())
// console.dir(myFunc)      // Check the console




//-------- Case: 2----------//

// In the 1st part, no closure is created

// let n1 = 2

// let sum = function () {
//     let n2 = 3
//     return n1 + n2
// }

// console.log(sum())
// console.dir(sum)


// But in the second part, a closure is created. Here the function is defining & calling itself
// Here "n1" is defined with in an enclosed scope. And a closure is formed with "n1"

// (function () {
//     let n1 = 2

//     let sum = function () {
//     let n2 = 3
//     return n1 + n2
//     }

//     console.log(sum())
//     console.dir(sum)
// })()

/* Ekta function k j j variable gula k mone rakhte hobe, sei variable gular reference k ek sathe ekta jaygay j function akare rekhe 
deya hoy sei function takei amra closure boli.....................Closure are functions that refer to free variables used locally, 
but defined in an "enclosed scope". Closure remember the environment in which they are created  */




//-------- Case: 3----------//

/* Here we can not directly get access of "balance" variable. It is behaving kind of like a "private property". But we are 
assigning "bankAccount" function into "account" variable. Now inside "account" variable, "bankAccount" function is there & inside 
"bankAccount" function, variable "balance" is available. So, by calling "account" function, indirectly we can access the 
"balance" variable through closure */

// function bankAccount(initialBalance) {
//     let balance = initialBalance
//     return function () {
//         return balance
//     }
// }

// let account = bankAccount(100000)
// console.log(account())




//-------- Case: 4----------//

// (function () {
//     let n1 = 2
//     let n2 = 3

// /* Here inside the closure, value of "n1 & n2" are suppose to be "2 & 3" respectively. But their values are "6 & 7". Because, 
// closure dont keep the value of the variable. Closure keeps the reference of the variables */    
//     let sum = function () {
//     return n1 + n2
//     }
//     console.log(sum())
//     console.dir(sum)


//     n1 = 6
//     n2 = 7
//     console.log(sum())
//     console.dir(sum)
// })()




//-------- Case: 5----------//

function stopWatch() {
    let startTime = Date.now()

    function getDelay() {
        console.log(Date.now() - startTime)
    }

    return getDelay
}

let timer =  stopWatch()

// Here we have created a fake delay
for (let i = 0; i < 100000000; i++) {
    let a = Math.random() * 1000000
}

timer()
console.dir(timer)




//-------- Case: 6----------//

