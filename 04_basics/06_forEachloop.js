
const programmingLanguage=['js',"py","java","ruby","cpp"]


programmingLanguage.forEach(function(value){  // ananoyms function
    //console.log(value)
})

programmingLanguage.forEach((value)=>{  // arrow function
    //console.log(value)
})


function print(value){
    //console.log(value)
}

programmingLanguage.forEach(print) // pass as function refrence 


programmingLanguage.forEach((value,index,arr)=>{
   // console.log(`${index} and its value is${value} and original array is ${arr}`)
})


const myObjArr=[
    {
        language:"python",
        extension:".py"
    },
    {
        language:"java",
        extension:".java"
    },
    {
        language:"cpp",
        extension:".cpp"
    }
]

myObjArr.forEach((item)=>{

    console.log(item.language)
    console.log(item.extension)
})