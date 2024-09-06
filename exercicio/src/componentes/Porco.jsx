import React, { useState } from 'react'

function Porco() {
    const [resultado, setResultado] = useState()

    function porquinho(){
        let real
        let valorProduto = Number(prompt("qual o valor do prodoto"))
        let porquinho1 = Number(prompt("quanto vc tem na popança EM 1 real"))
        let porquinho2 = Number(prompt("quanto vc tem na popança EM 50 centavos "))
        let porquinho3 = Number(prompt("quanto vc tem na popança EM 25 centavos"))
        let porquinho4 = Number(prompt("quanto vc tem na popança EM 10 centavos"))
        let porquinho5 = Number(prompt("quanto vc tem na popança EM 5 centavos"))
        let total = porquinho1 + (porquinho3 * 0.25) + (porquinho4 * 0.10) + (porquinho5 * 0.5) + (porquinho2 * 0.50)  

if(total >= valorProduto){
real = total - valorProduto
alert(`vc pode compra o produto de ${valorProduto} vc tem ${real} na popança`)
}else{
real = total - valorProduto
alert(`vc NÃO pode compra o produto de ${valorProduto} vc tem ${total} na popança faltam ${real}`)

}








         setResultado(produti)
         
         }

  return (
    <div>
<h2>COFRINHO DA FELICIDADE</h2>
<button onClick={porquinho}>POQUINHO</button>

      {resultado}
    </div>
  )
}

export default Porco
