
// in javascript, everythings is an object
function multiplyBy5(num){
   
    this.num=num
    //console.log(this)
    return num*5;
}
multiplyBy5.power=2;

// console.log(multiplyBy5(5))       //25
// console.log(multiplyBy5.power)    // 2
// console.log(multiplyBy5.prototype) // {}


function createUser(username,score){
    this.username=username;
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){  // to write     
   // .prototype is optional
    console.log(`price is ${this.score}`)  //200
    return ++(this.score);
}

const user1=new createUser("aman",200)
const user2=new createUser("raj",400)

console.log(user1.printMe())              // 201
console.log(user2)

