//  for of

const nums=[1,2,3,4,5]

for (const num of nums) {
    
    //console.log(num)
}

for (const num of nums) {
    if(num==3){
        break;
    }
    //console.log(num)
}

const greeting=" hello world !"

for (const greet of greeting) {
    //console.log(greet)
    
}

const myObj={
    name:"aman",
    roll :1902036,
    Branch: " Electrical",
    College:"NITP"


}
// for (const [key,value] of myObj) {
          
//     //console.log(key,value) // not iterable
    
// }

//const map=new Map(myObj)  // object are not iterable

const map=new Map()

map.set('IN',"India")
map.set('USA',"united state of america")
map.set('FR',"France")
map.set('Ne',"Nepal")
map.set('Ne',"Nepal")

for (const key of map) {
    console.log(key)
    
}

for (const [key,value] of map) {
    //console.log(`key is ${key } & its value is ${value}`)
    
}





