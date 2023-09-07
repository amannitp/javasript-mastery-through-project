
let randomNumber=Math.floor(Math.random()*(100-1 +1))+1; // generate random number between 1 to 100
// console.log(randomNumber)


const form=document.querySelector('form')
let input=document.querySelector('.input')
const prevGuess=document.querySelector('.prevGuess')
const guessRemain=document.querySelector('.guessRemain')

const lowOrHigh=document.querySelector('.lowOrHigh');

const mainDiv=document.querySelector('.main-div')

let prevGuessNum=[];
let guessRemaining =1;

let playGame=true;

let button=document.createElement('button');
if(playGame){
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const guess=parseInt(input.value)
    checkInputIsValidOrNot(guess)
    console.log(typeof input)
    
})
}
// if(playGame){}
function checkInputIsValidOrNot(userinput){

    if(isNaN(userinput) || userinput===''){
    alert(` Enter valid number`)
    }else if(userinput<1){
        alert(`please Enter the Number greater than 1`)
    }else if(userinput>100){
        alert(`please enter the number less than 100`)
    }else{
        prevGuessNum.push(userinput)

        if(guessRemain===11){
           
            displayGuess(userinput)
            displayMessage(`Game is Over and random number is ${randomNumber}`)
            document.querySelector('.finalResult').innerHTML=`<h3>Game is Over </h3>`
            endgame()
        }else{
            displayGuess(userinput);
            checkGuess(userinput);
        }


        
    }

}
function checkGuess(userInput){
    if(userInput===randomNumber){
        displayMessage(`You Guesses right`)
        endgame()
       
    }else if(userInput<randomNumber){
        displayMessage(`number is too low`)
    }else if(userInput >randomNumber){
        displayMessage(` number is too high`)
    }
        

}
function displayGuess(userInput){
    input.value=''
    prevGuess.innerHTML+= `${userInput},`;
    guessRemaining++;
    guessRemain.innerHTML=`${11-guessRemaining}`;

}
function displayMessage(message){ 
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
    

}
function endgame(){
    input.value=''
    input.setAttribute('disabled','')
    button.classList.add('button')
    button.innerHTML='Start Game Again'
    mainDiv.appendChild(button)
    playGame=false;
    startGameAgain()

}

function startGameAgain(){
    const newButton=document.querySelector('.button')

    newButton.addEventListener('click',()=>{
        guessRemaining=1
        prevGuessNum=[]
        randomNumber=Math.floor(Math.random()*(100-1 +1))+1;
        prevGuess.innerHTML=''
        guessRemain.innerHTML=`${11-guessRemaining}`;
        input.removeAttribute('disabled')
        mainDiv.removeChild('button')
        playGame=true;

    })
   


}


