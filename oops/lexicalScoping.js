function outer(){

    let username="Aman"
    console.log(`outer username is : ${username}`)

    function inner(){
        let innerVal=10
        console.log('inner username is : ',username)
        console.log(innerVal)
    }

    console.log(innerVal)
    inner()
}
outer()
console.log(username)
