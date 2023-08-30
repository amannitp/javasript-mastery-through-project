//const obj=new Object()  // singleton object

const obj={}  // non singleton object

console.log(obj)  // {}

obj.id=123
obj.cityName='Nalanda'
obj.name="Aman"

//console.log(obj)

// nested object 

let user={
    email:" amannnitp@123",

    userName:{
        fullName:{
            firstname:"Aman",
            lastname:" Raj"
        }
    }
}
console.log(user.flat(Infinity))  // here we can use flat because this is an object we can not use flat in object

// console.log(user["userName"].fullName["firstname"])
// console.log(user.userName.fullName.firstname)        // all are same answer
// console.log(user["userName"]["fullName"]["firstname"])



const obj1={id1:1,name1:"aman"}
const obj2={id2:2,name2:"raj"}

//const obj3={obj1,obj2}  // got nested object 

const obj3=Object.assign(obj1,obj2)
console.log(obj1)  // now obj1 is changed because we assign obj2 in obj1

//const obj3=Object.assign({},obj1,obj2)      first one is target and all other is source 

//const obj3={...obj1,...obj2} // same result above 
//console.log(obj3)

// Object.keys() and Objects.values(objname)

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))
//console.log(Object.entries(obj1).flat(Infinity))  // flat the nested object


