

let myDate=new Date()

// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())  // important
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())


myDate.toLocaleDateString('default',{
    weekday:"long"
})

console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getFullYear())
console.log(myDate.getHours())

let newDate=new Date(2023,0,29)
// console.log(newDate)
// console.log(newDate.toLocaleDateString())


let timeStamp= Date.now()

console.log(timeStamp)  // ans in milli seconf from 1970
console.log(Math.floor(timeStamp/1000))  // in second