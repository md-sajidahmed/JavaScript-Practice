var data  = ''

var maindata = ''

/******************** Method 1 ********************/

if (data.length == 0) {
    maindata = 'Md. Sajid Ahmed'
} else {
    maindata = data
}

console.log(maindata)

/**************************************************/



/************ Method 2 by OR shorthand ************/

// if there is something in variable name 'data', that will be printed in variable name 'maindata'. 
//Otherwise 'Md. Sajid Ahmed' will be printed.
// This is kind of like a boolean operation. Like: if data is true then value of data will be the output. But if data is false (empty string returns false), then another option will be the output.
var maindata = data || 'Md. Sajid Ahmed'
console.log(maindata)

// here data returns true since it is not empty string
var data = 'I am a coder and learner'
var maindata = data || 'Md. Sajid Ahmed'
console.log(maindata)

/**************************************************/






var isOk = true

/******************** Method 1 ********************/

if (isOk) {
    console.log('Everything is okay')
}

/**************************************************/



/************ Method 2 by AND shorthand ************/

// If variable name 'isOk' is true, then only console log will be executed, otherwise not
var mama = false
mama && console.log('Everything is okay')

/**************************************************/


