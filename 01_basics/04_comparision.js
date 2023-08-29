// > ,<, >=,<= ,==,!=,===,!==

// comparsion is difficult when we compare two diffrent datatypes 

// console.log("2">1)  true
// console.log("02">1) true

// console.log(null >0);  //false
// console.log(null >=0);  // true
// console.log(null <0);   // false
// console.log(null <=0);  // true
// console.log(null ==0);  //false

// comparsion operator == and >,>= ,<,<= works diffrently  == convert null to a number 0 thats why null >= gives true but null > gives false

console.log(undefined==0)  //false
console.log(undefined>0)  // false
console.log(undefined>=0) // false

// == & === interview qustion
console.log("2"==2)  // true
console.log("2"===2) // false