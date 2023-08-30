
// objects 

// singleton are not form when we declare object as a literal when object created with the help of constructor then singleton form

// 1. Object.create  // obect are formed with the help of this constructor 


//2 . object literal

let mySym=Symbol(123)

const jsuser={
    name:"Aman",  // value is any type
    roll:1902036,
    [mySym]:" @1324", // key taken as a symbol by this way 
    Branch:" Electrical",
   " isLoggedin": false,  // by default node read key as this way we can not access this proprty by jsUser.isloggedIn gives error

}

//console.log(jsuser.name)
//console.log(jsuser["roll"])
//console.log(jsuser.isLoggedin) // undefined  we can not access by dot(.)
//console.log(jsuser[" isLoggedin"])  // correct 
//console.log( jsuser[mySym])  // this is correct way of access symbol as a key 
//console.log(jsuser.mySym)  // use by . notation (result is undefined)

//console.log(jsuser)

// Object.freeze(jsuser)  // now no changes propagate in jsuser object

jsuser.roll=1902035
//console.log(jsuser)  // roll no not changes because freeze method()

jsuser.greeting=function(){
    console.log(" js user ")
}
jsuser.greetingTwo=function(){

    console.log(`my name is ${this.name}`)  // this refrence current object
}

console.log(jsuser.greetingTwo())
console.log(jsuser.greeting) // return object refrence 
console.log(jsuser.greeting()) // js user

console.log(jsuser)