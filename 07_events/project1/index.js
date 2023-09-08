 // 1 generate a random color
     
//      function getRandomHexColor() {
//     // Generate a random number between 0 and 16777215 (2^24 - 1)
//     const randomColor = Math.floor(Math.random() * 16777215);
    
//     // Convert the random number to a hexadecimal string
//     const hexColor = "#" + randomColor.toString(16).padStart(6, "0");
    
//     return hexColor;
// }

function getRandomHexColor(){
    const hex='0123456789ABCDEF'
    let color='#'

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
  }
  
  let intervalRef;
  function startChangingBgColor(){

    const changingBgColor=function(){
        document.body.style.backgroundColor=getRandomHexColor()
    }
    if(!intervalRef){
        intervalRef= setInterval(changingBgColor,1000)

    }

  }

  function stopChangingBgColor(){

    clearInterval(intervalRef)
    intervalRef=null
    
}

  document.querySelector('#start').addEventListener('click',startChangingBgColor)
  document.querySelector('#stop').addEventListener('click',stopChangingBgColor)