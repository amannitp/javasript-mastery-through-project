

function setUserName(userName){
    this.userName=userName
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email=email;
    this.password=password
}

const user=new createUser('Aman',"aman@123",'123')

console.log(user)