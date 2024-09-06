import React, { useState } from 'react'

function UberStar() {
    const [resultado, setResultado] = useState()


    function uberstar(){
       let distancia = Number(prompt("qual a distancia meu parceiro?"))
       let velocidade = 300000 
       let calculo
       let calculo1
     

       calculo = (distancia / velocidade)
       
       if(calculo > 31104000){
           calculo1 = (((((calculo / 60)/ 60)/24)/30)/12)
           alert(`a viagem vai demorar ${calculo1.toFixed(2)}ano`)
       }
       else if(calculo > 2592000){
           calculo1 = ((((calculo / 60)/ 60)/24)/30)
           alert(`a viagem vai demorar ${calculo1.toFixed(2)}mês`)
       }
       else if(calculo > 86400){
           calculo1 = (((calculo / 60)/ 60)/24)
           alert(`a viagem vai demorar ${calculo1.toFixed(2)}dia`)
        }
        else if(calculo > 3600){
            calculo1 = ((calculo / 60)/ 60)
            alert(`a viagem vai demorar ${calculo1.toFixed(2)}h`)
         }
        else if(calculo > 60){
            calculo1 = (calculo / 60)
            alert(`a viagem vai demorar ${calculo1.toFixed(2)}m`)
         }
        else if(calculo > 0){
            alert(`a viagem vai demorar ${calculo1.toFixed(2)}s`)
        }else if(calculo < 0){
            alert(`a viagem vai demorar ${calculo1.toFixed(2)}milisimos`)
        }
        



        
        setResultado(uber)
        
        }



  return (
    <div>
      <h2>UBER STAR</h2>
<button onClick={uberstar}>UBER STAR</button>

      {resultado}
    </div>
  )
}

export default UberStar
