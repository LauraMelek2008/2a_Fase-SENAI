import React, { useState } from 'react'
import './ParOuImpar.css'

function ParOuInpar() {
    const [resultado, setResultado] = useState()

    function copinho2(){
        let num1 = Number(prompt("digita um numero ae"))
        if(num1 %2 === 0){
            alert(`${num1} par`)
            if(num1 > 0){
                alert(`${num1} é positivo`)
            }else if(num1 < 0){
                alert(`${num1} é negativo`)
            }else if(num1 == 0){
                alert(`${num1} é nulo`)
            }
        }else{
            alert(`${num1} impar`)
            if(num1 > 0){
                alert(`${num1} é positivo`)
            }else if(num1 < 0){
                alert(`${num1} é negativo`)
            }else if(num1 == 0){
                alert(`${num1} é nulo`)
            }
        }



        
        setResultado(copo2)
        
        }
        



  return (
    <div className='Par-container'>
      <h2>atividade 2</h2>
<button onClick={copinho2}>Copo 2</button>


    
      {resultado}
      
    </div>
  )
}

export default ParOuInpar
