//  primitive datatypes ( call by value)

// 1. string 
// 2. number
// 3. boolean
// 4. null;
// 5. undefined
// 6 BigInt
// 7 symbol

// primitive data type stored in stack memmory so it always provides a copy of it 

let score =55;
let valueinDeci=66.6

let tempOutside=null
console.log(typeof tempOutside)  // object
let isloggedIn=true;
let name="Amna"

let bigNumber=56789000975443445n
let undefinedNum;
console.log(typeof undefinedNum) // undefined

let id=Symbol('123')
let anotherId=Symbol('123')
console.log(typeof id)  // symbol

console.log(id===anotherId)  // false

// non-primitive datatype (call by refrence)

// 1. object
// 2. array
// 3. function

// type of all non primitive datatype is object

let naturalNum=[1,2,3,4,5,6]

let myobj={
    name:"aman",
    roll: 123,

}

let myfunction=function(){

    console.log("Aman Raj")
}

console.log(typeof naturalNum)  // object
console.log(typeof myobj)       // object
console.log(typeof myfunction)  // function object 
console.log(typeof null)        // object


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
// stack(primitive datatype )  & heap memory(non-primitive)

let myName=" Aman"

let mycopyName=myName

mycopyName="raj"

console.log(myName)  // Aman
console.log(mycopyName) // raj


let object1={
    cityName:"patna",
    pincode: 803110
}

let object2=object1;

object2.cityName="bihta"

console.log(object1.cityName) // bihta
console.log(object2.cityName) // bihta