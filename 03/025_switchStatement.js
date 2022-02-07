var date = new Date()
var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default: 
        console.log('not a valid number')
}


// ---------------------------------------------------------------------


switch (new Date().getDay()) {
    case 4:
    case 5:
      console.log('Soon it is Weekend')
      break
    case 0:
    case 6:
      console.log('It is Weekend')
      break
    default:
      console.log('Looking forward to the Weekend')
  }