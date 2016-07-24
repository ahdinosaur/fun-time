const Time = require('./')

const date = new Date()
const time = Time(date)

console.log(date.toString())
console.log('year\t', time.year)
console.log('month\t', time.month)
console.log('day\t', time.day)
console.log('seconds\t', time.seconds)
