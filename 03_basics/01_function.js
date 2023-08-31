
//   function takes anythings as a parameter (primitive and non primitive data or function also)


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

// function userLoggedIn(username="Raj"){

//     if(!username){
//         console.log(" please enter valid name")
//         return ;
//     }

//     return ` my name is ${username} `
// }

// console.log(userLoggedIn())  //my name is Raj 
// console.log(userLoggedIn("Aman"))  // my name is Aman


// ***************************************************** Rest Operator *******************************************************************

// function addCartPrice(num1){
//     return num1
// }
// console.log(addCartPrice(200))  //200

// function addCartPrice(num1){
//     return num1
// }
// console.log(addCartPrice(200,300,400))  //200

// function addCartPrice(...num1){
//     return num1
// }
// console.log(addCartPrice(200,300,400,500))  // [ 200, 300, 400, 500 ]


// function addCartPrice(val1,val2,...num1){
//     console.log(val1)  // 200
//     console.log(val2)  // 300
//     return num1
// }
// console.log(addCartPrice(200,300,400,500))  // [400, 500 ]


// const user={
//     userName:' Aman raj',
//     prices:199,
//     'EmailId':"amannitp@123"
// }

// function shopping(anyObject){

//     console.log(`userName is ${anyObject.userName} is price is ${anyObject.prices} and user Email id is ${anyObject["EmailId"]}`)
// }

// shopping(user)

// shopping({

//     userName:'  raj',
//     prices:599,
//     'EmailId':"amannitp@123345"

// })
// const user={
//     userName:' Aman raj',
//     prices:199,
//     'EmailId':"amannitp@123"
// }

// function shopping({userName,prices,EmailId}){

//     console.log(`userName is ${userName} is price is ${prices} and user Email id is ${EmailId}`)
// }

// shopping(user)

// shopping({

//     userName:'  raj',
//     prices:599,
//     'EmailId':"amannitp@123345"

// })

//  const newArry=[100,200,1000,400]
// function returnSecondValue(getArr){

//     return getArr[2]
// }

// console.log(returnSecondValue([100,200,300,400]))  //300
// console.log(returnSecondValue(newArry))


// function as a parameter

function print(){
  console.log(" print ")
    
}
function sayhello(){
    console.log(" hello ")
}

print(sayhello());
