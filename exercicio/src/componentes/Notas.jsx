import React, { useState } from 'react'

function Notas() {
    const [resultado, setResultado] = useState()

    function notas(){
        let nota1 = Number(prompt("digite uma nota de 0 a 10"))
        let nota2 = Number(prompt("digite uma nota de 0 a 10"))
        let calculo = (nota1 + nota2)/2

          if(calculo > 9 || calculo <= 10){
           alert("parabens vc tirou um A")
          }
          else if(calculo > 7.5 || calculo <= 9){
            alert("parabens vc tirou um B")
          }
          else if(calculo > 6 || calculo <= 7.5){
            alert("parabens vc tirou um C")
          }
          else if(calculo > 4 || calculo <= 6){
            alert("parabens vc tirou um D")
          }
          else if(calculo > 0 || calculo <= 4){
            alert("parabens vc tirou um E")
          }





          setResultado(produtoo)
          
          }

  return (
    <div>
      <h2>NOTAS BACANUDAS</h2>
<button onClick={notas}>NOTAS</button>

      {resultado}
    </div>
  )
}

export default Notas
