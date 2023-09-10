// const user={
//     username:"Aman",
//     logInCount:10,
//     signedIn:true,

//     getUserDetails:function(){
//        // console.log(" Got user details from database")

//        //console.log(`username:${this.username}`)
//       // console.log(this)  // current context
//     }
// }

// console.log(user.username)
// console.log(user['username'])
// console.log(user.getUserDetails())

//user.getUserDetails()
//console.log(this) //{}


// constructor function 


function user(username,loginCount,isLoggedIn){
    this.username=username;
    this.logInCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.getInfo=function(){
        console.log(`welcome to ${this.username}`)

    }

    //return this ; 
}

// const user1=user("Aman",10,true)
// const user2=user("raj",10,false)

const user1=new user("Aman",10,true)
const user2=new user("raj",10,false)

console.log(user1.getInfo())
console.log(user2.getInfo())
console.log(user1.constructor)