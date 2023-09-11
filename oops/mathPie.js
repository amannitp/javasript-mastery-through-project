 const changePieValue=Object.getOwnPropertyDescriptor(Math,"PI")
 
 Object.defineProperty(changePieValue,'PI',{
    writable:true,
   // enumerable:true,
    enumerable:false
    
})

 //console.log(changePieValue)
 //console.log(Math.PI)
 changePieValue.PI=5
 console.log(changePieValue.PI) // value change


// const myNewObject={
//     name:"AMAN",
//     rollNo:1902036,

//     printMe:function(){
//         console.log("hello")
//     }


// }
// console.log(myNewObject)
// console.log(Object.getOwnPropertyDescriptor(myNewObject)) //undefined
// console.log(Object.getOwnPropertyDescriptor(myNewObject,'name'))

// Object.defineProperty(myNewObject,'name',{
//     writable:false,
//    // enumerable:true,
//     enumerable:false
    
// })
// console.log(Object.getOwnPropertyDescriptor(myNewObject,'name'))

// for (const [key,value] of Object.entries(myNewObject)) {
//     if(typeof value !== 'function'){
//     console.log(`${key}: ${value}`)
//     }
    
// }
