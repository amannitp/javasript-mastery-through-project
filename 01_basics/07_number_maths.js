// let score=300

// //console.log(score)// 300

// let balance=new Number(400)

// console.log(balance)  // [Number: 400]
// console.log(typeof balance) // object

// console.log(score.toString().length) // 3
// console.log(balance.toString().length)//3

// let newNumber=133.987

// console.log(newNumber.toPrecision(3))  // 134 use for both decimal place or non-decimal place
// console.log(newNumber.toPrecision(2)) // 1.3e+2

// console.log(newNumber.toFixed(1))  // 134 only for decimal 

// let currency=1234567
// console.log(typeof newNumber.toLocaleString()) 

// console.log(currency.toLocaleString()) // 12,34,567
// console.log(currency.toLocaleString('en-IN'))

// console.log(score.toExponential())  // convert in expometial form 
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)


// console.log(currency.valueOf())  // JavaScript calls the valueOf method to convert an object to a primitive value



/*

constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.abs(-4))
console.log(Math.round(5.3))
console.log(Math.ceil(5.2))
console.log(Math.floor(4.7))
console.log(Math.sqrt(3).toFixed(2))
console.log(Math.min(1,2,3,3,3,-60))
console.log(Math.max(1,2,3,3,3,-60))


let min=10;
let max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)  // number between 10 and 20 both are included
