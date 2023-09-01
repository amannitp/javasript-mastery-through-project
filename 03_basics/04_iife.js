
// immediatly invoke function expression


(function iife(){
    console.log(`DB CONNECTED`)
})(); // important

(function iife(){
    console.log(`DB CONNECTED TWO`)
})();

(()=>{
    console.log(`DB CONNECTED three`)
})();

(()=>(console.log('DB CONNECTED four')))();

(function iife(name){
    console.log(`DB CONNECTED TWO ${name}`)
})("aman");
