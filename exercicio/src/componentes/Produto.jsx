import React, { useState } from 'react'


function Produto() {
    const [resultado, setResultado] = useState()

    function desconto(){
       let produto = Number(prompt("quanto custa esse produto"))
       let calculo = 0.3
       let calculo1 = 0.45
       let calculo2
       let calculo3

       if(produto >= 20){
        calculo2 = (produto * calculo)+produto
        calculo3 = calculo2 - produto
        alert(`o valor do produto ${produto} e o da venda ${calculo2.toFixed(2)} o lucro é de ${calculo3.toFixed(2)}`)
       }else if(produto < 20){
        calculo2 = (produto * calculo1)+produto
        calculo3 = calculo2 - produto
        alert(`o valor do produto ${produto} e o da venda ${calculo2.toFixed(2)} o lucro é de ${calculo3.toFixed(2)}`)
       }





         setResultado(produtoo)
         
         }

  return (
    <div>
<h2>PRODUTOS DO BALACUBAKA</h2>
<button onClick={desconto}>O-O</button>


      {resultado}
    </div>
  )
}

export default Produto
