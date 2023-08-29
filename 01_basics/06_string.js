
let myName=" Aman Raj"
 let myProjectNum=4;

 console.log(typeof myName) // string

//  console.log(myName +" "+myProectNum)

console.log(`my name id ${myName} and my total project is ${myProjectNum}`)  // always use this way 

let anotherName=new String(" Raj")

console.log(typeof anotherName) // object


let anotherNameIncapital=anotherName;
anotherNameIncapital=anotherName.toUpperCase()

console.log(anotherName)  // Raj  original value not changes 
console.log(anotherNameIncapital)  // RAJ  



let stringOperation ="use string method on this"

//1. .at() // takes +ve and negative number as a argument 

// console.log(stringOperation.at(5)) // t 
// console.log(stringOperation.at(-11)) // h
// console.log(stringOperation.at(56))  // undefined

// 2.charAt(index)  only takes +ve indes as argument and return character at that index if index out of bound then return empty
// at()  method takes both +ve and negative value as an argument && also return undefined when outofbound 

// console.log(stringOperation.charAt(5)) // t
// console.log(stringOperation.charAt(-11)) // empty
// console.log(stringOperation.charAt(56))

// console.log(stringOperation[5]) // t
// console.log(stringOperation[-11]) // undefined
// console.log(stringOperation[56]) // umdefined this is the only diffrence between charAt()  & [] notation 

// 3. charCodeAt()
// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.


// 4. concat() // The concat() method of String values concatenates the string arguments to this string and returns a new string.

// console.log(stringOperation.concat(" hello"))
// console.log(stringOperation)

// 5 endWith() // The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

// return true or false

// console.log(stringOperation.endsWith("this"));  // true 
// console.log(stringOperation.endsWith("this?"));  // false

// 6. includes() // This method lets you determine whether or not a string includes another string.

// console.log(stringOperation.includes("use"))  // true
// console.log(stringOperation.includes("useme")) // false

// 7. indexOf()  // The index of the first occurrence of searchString found, or -1 if not found.

// 8. lastIndexOf()      //The index of the last occurrence of searchString found, or -1 if not found.

// 9. 
/*
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"raj"


*/