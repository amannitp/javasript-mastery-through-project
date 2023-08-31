

function sayHii(){
    console.log(" Hello Aman")
}

//sayHii()


// function addTwoNumber(number1,number2){

//     console.log(number1+number2)  // NaN
// }

// addTwoNumber()


// function addTwoNumber(number1,number2){

//     console.log(number1+number2)  // NaN
// }

// addTwoNumber(5)

// function addTwoNumber(number1,number2){

//     console.log(number1+number2)  // NaN
// }

//  let result=addTwoNumber()
//  console.log(result) // undefined

// function addTwoNumber(number1,number2){

//     console.log(number1+number2)  // NaN
// }

// console.log(addTwoNumber()) // undefined

// function addTwoNumber(number1,number2){

//     console.log(number1+number2)  // 8
//     return number1+number2
// }

// let result=addTwoNumber(3,5)
// console.log(result)


// function userLoggedIn(username){

//     return ` my name is ${username} `
// }

// console.log(userLoggedIn())  // my name is undefined


// function userLoggedIn(username){

//     if(!username){
//         console.log(" please enter valid name")
//         return ;
//     }

//     return ` my name is ${username} `
// }

// console.log(userLoggedIn())  
// console.log(userLoggedIn("Aman"))  

function userLoggedIn(username="Raj"){

    if(!username){
        console.log(" please enter valid name")
        return ;
    }

    return ` my name is ${username} `
}

console.log(userLoggedIn())  //my name is Raj 
console.log(userLoggedIn("Aman"))  // my name is Aman
