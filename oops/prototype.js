
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
   // console.log(`price is ${this.score}`)  //200
    return ++(this.score);
}

const user1=new createUser("aman",200)
const user2=new createUser("raj",400)

// console.log(user1.printMe())              // 201
// console.log(user2)


// prototype

const myName="Aman        "

// console.log(myName.length)
// console.log(myName.trim().length)


let myHeros=['thor',"spiderman"]

let heroPower={
    thor:"hammer",
    spider:"sling",
    getSpiderPower:function(){

        //console.log(`spidy power is ${this.spider}`)
        return this.spider
    }
}

Object.prototype.aman=function(){
   // console.log(" Aman is present in all object")
}



let spidyPower=heroPower.getSpiderPower()

console.log("spidy power is: ",spidyPower)
// heroPower.aman() //  Aman is present in all object
// myHeros.aman()   // Aman is present in all object

Array.prototype.heyAman=function(){

    //console.log("Aman say hello")
}
myHeros.heyAman() // Aman say hello
// heroPower.heyAman() // error  heroPower.heyAman is not a function


// inheritance   __proto__

 const user={
    name:"aman",
    email:"aman@gmail.com"
 }
 const Teacher={
    skill:"JS"
 }

 const TeachingSupport={
    isAvailable:true
 }

 const TASupport={
    makeAssigment:" js Assigmnent",
    fullTime:true,
    __proto__:TeachingSupport  // inheritance
 }
 Teacher.__proto__=user // inheritance


 // modern syntax
 Object.setPrototypeOf(TeachingSupport,Teacher)


 let anotherUserName=" raj          "

 String.prototype.trueLength=function(){
    //console.log(`${this.name}`)
    console.log(this)
    console.log(`True length is : ${this.trim().length}`)
 }
 anotherUserName.trueLength()
 "aman   ".trueLength()
 "AMit  ".trueLength()



