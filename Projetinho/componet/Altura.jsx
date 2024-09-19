import { useState } from "react"

/* Enzo e Valentina:
Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, 
enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por 
ano. Crie um programa/script/algoritmo que mostre quando Enzo será mais 
alto que Valentina. */

function Altura() {
const [alto, setAlto] = useState()
function pedro(){
let enzo = 140
let valentina = 150
let anos = 0

do{

    enzo +=3
    valentina +=2
    anos +=1
    
    
    alert("esperando")
    
}while(enzo < valentina)

alert(`o enzo vai estar maior maior que valentina em ${anos}`)
setAlto(anos)





}
  return (
    <div>
      <h1>ENZO E VALENTINA</h1>
<button onClick={pedro}>QUANTOS ANOS O ENZO VAI ESTAR MAIOR QUE VALENTINA</button>
anos
{alto}
    </div>
  )
}

export default Altura
