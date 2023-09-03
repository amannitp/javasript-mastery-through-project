

const coding=["java","python","rubby"," cpp"]


const value=coding.forEach((item)=>{
    //console.log(item)
    
    return item;  // for each not return any things 
                 // also break statement not work in forEach loop
})

// console.log(value)  // undefined


// filter 

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNums.filter((num)=> num>11) //[]
const newNum=myNums.filter((num)=> (num>6)) //[]  // retrn element of that element which satistfy the condition 
//console.log(newNum)

const newArr=[]

myNums.forEach((num)=>{
    if(num>6){
        newArr.push(num)  // same as above 
    }
})
//console.log(newArr)


const newNum2=myNums.filter((num)=>{

    if(num==6){
        // break;  we cannot break statement in filter()
    }
    return num;  // filter message want a condition if there is no condition the it return arr itself
})

//console.log(newNum2)

const newNums3=myNums.map((nums)=>{
   
    if(nums==6){
        // break;   break statement not use in map
    }
    return nums+10
})

//console.log(newNums3)

const numP10=[]

myNums.forEach((num)=>{
    if(num==5){
        // break;  we cannot use break in forEach loop
    }
    numP10.push(num+10)
})

// console.log(numP10)

const chainingInHOF=myNums.map((nums)=>nums*10).
                           map((nums)=>nums+1).
                           filter((nums)=>(nums>50)).
                           map((nums)=>(nums-1))

// console.log(chainingInHOF)


// reduce()  //return single value


const sumAllNum=myNums.reduce((acc,nums)=>{
      return acc+nums;
},0)


console.log(sumAllNum)
