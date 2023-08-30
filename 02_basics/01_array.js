// Array 

let myArr=[1,2,3,4,5]

let heroes=["shaktiman","batman","superman","spiderman"]


const myArr2=new Array(1,2,3,4,5)  // we can declare this way as well

// console.log(myArr2)

// console.log(myArr[1])

// console.log(heroes[1])

// Arrays Methods 

// 1. push();

myArr.push(6)
console.log(myArr)

// 2. pop();

console.log(myArr.pop())

console.log(myArr)

// 3. unshift()

myArr.unshift(0)
console.log(myArr)

// 4. shift()

console.log(myArr.shift()); //0

console.log(myArr)

// 5. includes() gives boolean value

console.log(myArr.includes(9))  // false
console.log(myArr.includes(3))  // true

// 6. indexOf()  // give first occurance if not present return -1

console.log(myArr.indexOf(3))  // 2
console.log(myArr.indexOf(9))  //-1

// 7. lastIndexOf()  // ive last ocuurance index if not present return -1

console.log(myArr.lastIndexOf(3)) // 2
console.log(myArr.lastIndexOf(9)) // -1

// 8.join()  // convert all element into string and make a single string 

console.log(myArr.join())        // 1,2,3,4,5
console.log(myArr.join().length) // 9
console.log(typeof myArr.join())  // string 

// 9. slice() // not include range

console.log("A ", myArr)


console.log("B ", myArr.slice(1,3))


// 10 splice(1,3)  // include the range and it modify the original array as well 

console.log("C ", myArr.splice(1,3))

