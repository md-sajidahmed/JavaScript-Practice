for ( ; ; ) {
    var rand = Math.round(Math.random() * 10 + 1)
    if (rand == 5) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You have got' + rand)
    }
}