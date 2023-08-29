let score ="33abc";  // NaN

let number=Number(null) ;
//console.log(number)  // output = 0

let num=Number(undefined);
//onsole.log(num)  //  output  NaN 

let booleanValue=Number(true)
//console.log(booleanValue)  // 1

let stringVal=Number("Aman")
//console.log(stringVal)   // NaN


let  valueInNumber=Number(50)

let boolNum=Boolean(1)
let boolNum2=Boolean(0)
console.log(boolNum)  // true 
console.log(boolNum2) // false 

let boolStr=Boolean(""); // false
let boolStr2=Boolean(" Aman RaJ")  //true 


console.log(boolStr)
console.log(boolStr2)

console.log(Boolean(null))  // false 
console.log(Boolean(undefined)) // false


console.log(String(null))  // null
console.log(String(undefined)) // undefined

//console.log( typeof valueInNumber)
//console.log(typeof score)
//onsole.log(typeof(score));