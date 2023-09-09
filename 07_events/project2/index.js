const dispalyDiv=document.querySelector('.display')

    window.addEventListener('keydown',(e)=>{
        
        dispalyDiv.innerHTML=`<table class="styled-table">
  <tr>
    <td>Key </td>
    <td>KeyCode</td>
    <td>code</td>
  </tr>
  <tr>
    <td>${e.key===' '?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`


    })

    
