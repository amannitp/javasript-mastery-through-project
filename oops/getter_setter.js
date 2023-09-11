class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){

        return this._email.toUpperCase()
    }
    set email(value){
         this._email=value

    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value.toUpperCase()
    }
}

const user1=new User("a@12423","abc")

// console.log(user1)
// console.log(user1.password)
// console.log(user1.email)


// getter and setter through function 

function obj(email,password){
    this.email=email;
    this.password=password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()

        },
        set :function(value){
            this._email=value

        }
    }),

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()

        },
        set :function(value){
            this._password=value

        }
    })

}
const myobj=new obj("Aaman@132342","sdfg")
console.log(myobj.email)