

// let a=20;
// const b=30;
// var c=40
// console.log(a)
// console.log(b)
// console.log(c)

// if(true){
// let a=20;
// const b=30;
// var c=40
// }
// console.log(a)  error
// console.log(b)  error

//console.log(c) // 40

// function scope(){
//   let a=20;
//   const b=30;
//   var c=40
// }
// scope()
// console.log(a) eroor 
// console.log(b)  error 
// console.log(c)  error  because var is functional scope 


// function outer(){
      
//     let a=20
//     const b=30
//     var c=50

//     function inner(){
//         let a=100
//         const b=200
//         var c=300

//         console.log("inner",a)
//         console.log("inner",b)
//         console.log("inner",c)

//     }
//     //inner()
//     console.log("outer",a)
//     console.log("outer",b)
//     console.log("outer",c)
//     inner()

// }

// outer()


// function one(){

//     const num1=20
//     let num2=30

//     function two(){

//         let innerNum1=30
//         const innerNum2=60
//         console.log("inner",innerNum1)
//         console.log("inner",innerNum2)

//         return innerNum1+innerNum2
//     }
//     console.log("outer",num1)
//     console.log("outer",num2)
//     return two;
// }

// let res=one();
// console.log(res)

// console.log(res())


//console.log(addOne(5))  // valid 

function addOne(num1){

    return num1+1
}


// console.log(addTwo(5)) // error 

// var addTwo=function(num2){
//     return num2+2
// }

console.log(addTwo(5)) // error 

const addTwo=function(num2){
    return num2+2
}

