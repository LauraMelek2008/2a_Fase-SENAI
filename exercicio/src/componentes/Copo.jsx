import React, { useState } from 'react'


function Copo() {
    const [resultado, setResultado] = useState()

function copinho1(){
let num1 = Number(prompt("digita um numero ae"))
if(num1 > 0){
    alert(`${num1} é positivo`)
}else if(num1 < 0){
    alert(`${num1} é negativo`)
}else if(num1 == 0){
    alert(`${num1} é nulo`)
}
setResultado(copo1)

}

  return (
    <div>
<h2>atividade 1</h2>
<button onClick={copinho1}>Copo 1</button>


    
       {resultado}
      </div>
  
  )
}

export default Copo
