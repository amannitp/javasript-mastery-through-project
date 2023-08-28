"use strict"; // treated all js code as newer version 

// alert(3+3 )  error because we use node js not broswer


// console.log(3+  // not a good practice 
//     3
//     )  // code readablity should be high 

// console.log(" hello")  console.log(" world")  // error 
// console.log(" hellow"); console.log(" world")  // not an error 

// console.log(" hello");
// console.log(" world");  // this way to write code are prefereable so that code readlibity should be high



//***************************** ********************* data types ************************************************************************* */


// primitive data type 

// 1. number  => range 2 to the power 53;

// 2.bigint 

// 3.string => " " , '', ``

// 4.boolean => true, false  // The Boolean type represents a logical entity having two values, called true and false.

// 5. null    standad alone value //The Null type has exactly one value, called null.

// 6 .undefined //The Undefined type has exactly one value, called undefined. Any variable that has not been assigned a value has the value undefined.

// 7.symbol  // Each possible Symbol value is unique and immutable.

let name=" aman"
let age=23;
let isLoggedIn=false;
let state;

console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof state)
console.log(typeof null)  // object
console.log(typeof undefined)  // undefined

// interview question 
//1 what is the data type of null and undefined

// non primitive data type 

// 1. object