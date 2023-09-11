class user{
    constructor(username){
        this.username=username
    }
    showMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }

    addCourses(){
        console.log(`course is added by ${this.username}`)
    }
}

const teacher1=new Teacher("Aman","aman@123","12345455")
const user1=new user(" Raj")

teacher1.addCourses()
teacher1.showMe()
user1.showMe()
console.log(teacher1===user1)
console.log(teacher1 instanceof user)
console.log(user1 instanceof Teacher)


