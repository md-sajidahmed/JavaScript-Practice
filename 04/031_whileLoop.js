// Whenever you do not know how long to run the loop, that time while loop have to used. 

var i = 1

while (i < 5) {
    console.log('I am Sajid')
    i++
}




var isRunning = true

while (isRunning) {
    var rand = Math.round(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    } else {
        console.log('You have got ' + rand)
    }

}