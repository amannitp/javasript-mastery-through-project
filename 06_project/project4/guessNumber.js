
let randomNumber=Math.floor(Math.random()*(100-1 +1))+1; // generate random number between 1 to 100
console.log(randomNumber)


const form=document.querySelector('form')
let input=document.querySelector('.input')
const prevGuess=document.querySelector('.prevGuess')
const guessRemain=document.querySelector('.guessRemain')

const win=document.querySelector('.win');

let prevGuessNum=[];
let guessRemaining =1;

let playGame=true;

if(playGame){
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    input=input.value
    checkInputIsValidOrNot(input)
    console.log(typeof input)
    input=''
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
        userinput=parseInt(userinput)
        GuessNumberGameStart(userinput)
    }

}
function GuessNumberGameStart(userInput){
    if(userInput===randomNumber){
        win.innerHTML=`we guess it right`
        endgame()
    }else{
        prevGuessNum.push(userInput)
        prevGuess.innerHTML=prevGuess.textContent+ userInput;
        

        
    }

}

function displayMessage(message){ 
    

}
function endgame(){

}

function startGameAgain(){

}


