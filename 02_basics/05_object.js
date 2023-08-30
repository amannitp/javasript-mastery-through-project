// object destructring and json data 


const course ={
    coureName:"Electrical Enginnering ",
    courseprice:999,
    courseInstructor: "Amitesh "
}

// console.log(course.courseName)

//const {coureName,courseprice:CP,courseInstructor:CI}=course  // object destructring
const {coureName,courseprice:CP,courseInstructor:CI}={...course} // object destructring

// console.log(CI)
// console.log(CP)
// console.log(coureName)

// json API

// {
//     "id":1,
//     "name": "Aman",
//     " course": " EE"   // json format just like an object but it has no name
// }

// [
//     {},
//     {},
//     {},    json data 

// ]