import React, { useState } from 'react'

function SalarioNoBolso() {
    const [resultado, setResultado] = useState()

    function copinho3(){
        let num1 = Number(prompt("qual é o seu salario?"))
        let num2 = Number(prompt("quanto vc quer de imprestimo?"))
        let calculo1
        let calculo2
   
        calculo1 = 30/100
        calculo2 = num1 * calculo1
        
        if(num2 > calculo2){
            alert(`VC não pode fazer o imprestimo de ${num2} vc só pode fazer imprestimo de ${calculo2} pra baixo`)
        }else{
            alert(`Imprestimo bem sucedido, vc pagou ${num2}`)
        }

        setResultado(copo3)
        
        }

  return (
    <div>
      <h2>Bora sacar o pagamento do mês </h2>
      <button onClick={copinho3}>Copo 3</button>

       {resultado}
    </div>
  )
}

export default SalarioNoBolso
