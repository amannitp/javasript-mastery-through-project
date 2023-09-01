

// falsy value
// 1. false
// 2. ""
// 3. 0
// 4. undefined
// 5. null
// 6. NaN
// 8. -0
// 9 0n
// 10 

// if(0n){
//     console.log("truthy")
// }else{
//     console.log(" falsy value")
// }

// if(undefined){
//     console.log("truthy")
// }else{
//     console.log(" falsy value")
// }

// if(null){
//     console.log("truthy")
// }else{
//     console.log(" falsy value")
// }

// if(NaN){
//     console.log("truthy")
// }else{
//     console.log(" falsy value")
// }

// all other value are truthy

// some confusing trurhty value are

// 1. []
// 2. {}
// 3. "0"
// 4. "false"

const check=[]
if(check.length===0){
    console.log( " this way you can check empty array present or not")
}

const myObj={}

if(Object.keys(myObj).length===0){
    console.log(" this way you can check empty object")
}
if(Object.values(myObj).length===0){
    console.log(" this way you can check empty object")
}

