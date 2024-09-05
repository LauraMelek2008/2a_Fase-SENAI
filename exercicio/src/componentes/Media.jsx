import React, { useState } from 'react'
import './Media.css'

function Media() {
const [resultado, setResultado] = useState()

function calcularMedia(){
let nota1 = Number(prompt("digita um numero ae"))
let nota2 = Number(prompt("digita um numero ae"))
let media = (nota1 + nota2)/2
setResultado(media)

}

  return (
    <div className='Media-container'>
      <h2>Exercicio para calcular mais de 2 números</h2>
      <button onClick={calcularMedia}>Calcular</button>
<div>
Média: {resultado}
</div>
    </div>
  )
}

export default Media
