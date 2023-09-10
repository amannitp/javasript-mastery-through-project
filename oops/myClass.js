// class in js 

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeuserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user1=new user("Aman","amannitp@123","1234")

console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeuserName())



// behind the scene 

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

User.prototype.encryptPassword=function(){
    console.log(`${this.password}abc`)
}

User.prototype.changeuserName=function(){
    return `${this.username.toUpperCase()}`
}

const newUser=new User("Amit","amait@13323","8986766")
newUser.encryptPassword()
console.log(newUser)
console.log(newUser.changeuserName())
