

const user={
    userName:"Aman",
    price:999,

    welcomeMessage:function(){

        console.log(this.userName);
        console.log(this) // this refer the current context of the object
       
    }
}

//console.log(user.welcomeMessage)  // print  function refrence
// console.log(user.welcomeMessage())  // return undefined beacause function not return anythings
// user.userName="raj"
// user.welcomeMessage()


// console.log(this) // {}


// function one(){

//    const userName="Aman"
//     console.log(this) // refer global object
//     console.log(this.userName)  // undefined
// }
// one()

// const fun=()=>{
//     const userName="Aman"

//     console.log(this)  // {}
//     console.log(this.userName) // undefined
// }

// const fun=(num,num2)=>console.log(num+num2 ,"arrow function")
// //const fun=num=>console.log(num ,"arrow function")
    

// // fun()
// fun(8,4)

// const addTwo=(a,b)=>(a+b)  // explicit return 
// console.log(addTwo(4,6))

const addTwo=(a,b)=>{
    return a+b
}
console.log(addTwo())