

// 1st way

// const promiseOne=new Promise(function(resolve,reject){

//     // Asymc work 
//     // db connected , network call

//     setTimeout(function(){
//       //  resolve()
//         console.log(" Async task is completed ")
//         resolve()
        
//     },1000)
// })

// promiseOne.then(function(){
   
//     console.log(" Promises is fullfilled ")

// })


// // 2nd way

// new Promise(function(resolve,reject){


//     setTimeout(function(){
//         console.log(" Async 2 is completed")
//         resolve()
//     },1000)

// }).then(function(){

//     console.log("Async 2 task is fullfilled")
// })

// // 3rd way

// const promisesThree=new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log(" Astnc 3rd Task is completed")
//         resolve({name:"Aman",RollNo:1902036})
//     },1000)
// })

// promisesThree.then(function(user){

//     console.log(user)
// })

// // 4th way

// const promiseFour=new Promise(function(resolve,reject){

//     let error=false;

//     if(!error){
//         resolve({username:"Aman",password:"123@123"})
//     }else{
//         reject(" Something went Wrong")
//     }
// })

// promiseFour
// .then(function(user){

//     console.log(user)
//     return user.username;  // chaining 
// })
// .then(function(userName){
//     console.log(userName) // here return the promise of first one 
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Either promise is resolved or promise are rejected")
// })

// // 5 way

// const promiseFive=new Promise((resolve,reject)=>{

//     let error=false;

//     if(!error){
//         resolve({username:"javascript",password:"123@123"})
//     }else{
//         reject(" java went Wrong")
//     }


// })

// async function consumePromiseFive(){  // it not capture error

//     const response= await promiseFive
//     console.log(response)
// }

// consumePromiseFive()


// // 6th way

// const promiseSix=new Promise((resolve,reject)=>{

//     let error=true;

//     if(!error){
//         resolve({username:"javascript again",password:"123@123"})
//     }else{
//         reject(" javaagain went Wrong")
//     }


// })

// async function consumePromiseSix(){  
//    try{
//     const response= await promiseSix
//     console.log(response)

//    }catch(error){
//         console.log(error)  // here error is catch
//    }
   
// }

// consumePromiseSix()



// best way to use 
// async function getData(){

//     try {
//         const response=await fetch('https://randomuser.me/api')
//         const data= await response.json()
//         console.log(data)
        
//     } catch (error) {

//         console.log("E: ",error)
        
//     }
// }

// getData()

// 7th way

fetch('https://randomuser.me/api')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)

})
.catch((error)=>{
    console.log(error)
})