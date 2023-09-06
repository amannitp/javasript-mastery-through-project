

const form=document.querySelector('form')

const button=document.querySelector('.btn')

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    // console.log(e)

    let weight=document.querySelector("#weight").value
    let height=document.querySelector('#height').value
    const result=document.querySelector('.result')

    

 
    
    if(height==='' || height <0 || isNaN(height)){
      
        result.innerHTML=" Please Enter the valid height"

    }else if(weight ==='' || weight <0 || isNaN(weight)){
        result.innerHTML=" Please Enter the valid weight"
    }else{
        weight=parseInt(weight)
        height=parseInt(height)
        const bmi=((weight*10000)/(height*height)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`

        const BMIresult=document.querySelector('.BMIresult')

        if(bmi< 18){
            BMIresult.innerHTML=`<span> you are in underweight</span>`

        }else if(bmi> 18 && bmi<24){
            BMIresult.innerHTML=`<span>normal </span>`
        }else{
            BMIresult.innerHTML=`<span> you are overweight</span>`
        }
    }
})