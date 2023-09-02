
const myObj={
    js:"javascript",
    rb:"rubby",
    cpp:"c++",
    swift:"swift by apple"
}

for (const key in myObj) {

    //console.log(key) // key 
}

for (const key in myObj) {
    
    //console.log(myObj[key]) // value of object
}


for (const key in myObj) {

    //console.log(`key is ${key} and its value is ${myObj[key]}`)
    
}

// for in loop on array

const programmingLanguage=['js',"py","java","ruby","cpp"]

for (const key in programmingLanguage) {

    //console.log(key) // index of array
   
}

for (const key in programmingLanguage) {

    // console.log(programmingLanguage[key]) // each value of array
   
}

for (const [key,value] in programmingLanguage) {

    // console.log(key,value) // index and undefined  // this is not correct way
   
}

for (const key in programmingLanguage) {

    //console.log(`key is ${key} and its value is ${programmingLanguage[key]}`)
    
}


const map=new Map()

map.set('IN',"India")
map.set('USA',"united state of america")
map.set('FR',"France")
map.set('Ne',"Nepal")
map.set('Ne',"Nepal")

for (const key in map) {

    console.log(map[key])  // not valid for map 
   
}