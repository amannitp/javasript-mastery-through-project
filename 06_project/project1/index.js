
const buttons=document.querySelectorAll('.button')

const body=document.querySelector('body')

buttons.forEach((button)=>{
      button.addEventListener('click',(event)=>{
        console.log(event)

        if(event.target.id=="red"){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id=="blue"){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id=="yellow"){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id=="chocolate"){
            body.style.backgroundColor=event.target.id
        }
        
        //body.style.backgroundColor=button.getAttribute('id')
      })
})