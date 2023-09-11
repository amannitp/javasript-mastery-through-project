class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
   static  createId(){ // 
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const user1=new User("Aman")
const teacher1=new Teacher("Raj","amannitp@123")
teacher1.logMe()
teacher1.createId() // error due to static method

//console.log(user1.createId()) // error dure to static 
