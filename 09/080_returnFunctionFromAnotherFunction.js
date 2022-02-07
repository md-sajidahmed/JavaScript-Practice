function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name
    }

    return greetings
}

/* With "Good morning" data , gm will be stored in the function name "greetings". The way data will be stored in another function is 
known as closure. But the function "greet('Good morning')" will not directly call the function "greetings" */

var gm = greet('Good morning')
var ge = greet('Good evening')
var gn = greet('Good night')
var hello = greet('Hello')

console.log(typeof gm)

var output = gm('Sajid')
console.log(output)
console.log(ge('Sajid'))
console.log(gn('Buri'))
console.log(hello('Friends'))



/*------------------------- Power of a number --------------------------*/

// function base(b) {
//     function number(n) {
//         var result = 1
//         for(var i = 0; i < b; i++) {
//             result *= n
//         }

//         return result 
//     }

//     return number
// }

// Since we are returning only the number function, so we can write in the way given below

function base(b) {
    return function (n) {
        var result = 1
        for(var i = 0; i < b; i++) {
            result *= n
        }

        return result 
    }
}

var base2 = base(2)
console.log(base2(5))