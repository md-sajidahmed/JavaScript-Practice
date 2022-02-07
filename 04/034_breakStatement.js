while (true) {
    var rand = Math.round(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You have got ' + rand)
    }

}



for (var i = 1; i < 5; i++) {
    if (i % 5 == 0) {
        console.log('Done')
        break
    } else {
        console.log(i)
    }
}