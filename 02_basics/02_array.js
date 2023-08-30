

//  Array Methods 

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10]
let arr3=[11,12,13,14,15]

// 11. concat()

let newArr=arr1.concat(arr2,arr3)
// console.log(newArr)

// 12. spread operator (...) do same as conacat

let newCombineArr=[...arr1,...arr2,...arr3]

// console.log(newCombineArr)

let anotherArray=[1,2,3,[4,6,7,8],9,10,[11,12,[13,14,15]]]

// 13 flat() convert 2D array or more into 1d array

console.log(anotherArray.flat(Infinity))

// 14. Arrays.isArray() // return true or false

console.log(Array.isArray("Aman Raj"))  // false

console.log(Array.isArray([1,2,3,4])) // true

// 14 Array.from() make a new array

console.log(Array.from("AmanRaj")) 
console.log(Array.from({name:"Aman"})) // []


console.log(Object.keys({name:"Aman"}))  // make a new array from objectkeys 
console.log(Object.values({name:"Aman"})) // make a new array drom objects values