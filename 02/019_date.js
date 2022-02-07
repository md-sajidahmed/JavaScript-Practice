var date = new Date()
console.log(date)

console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(date.toTimeString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString())

console.log(date.getFullYear())

// In programing language, month number starts from 0. Thats why march month is defined by 2
console.log(date.getMonth())
console.log(date.getDate())
// getDay() function shows the number day. 0 stands for sunday & it goes on
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
