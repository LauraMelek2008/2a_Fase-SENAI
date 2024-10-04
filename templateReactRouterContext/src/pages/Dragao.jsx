import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"
import { useContext, useState } from "react"
function Dragao() {
  const {diaHoje, setDiaHoje} = useContext(GlobalContext)
function trocardia(){

  let dia = prompt('qual é o dia')
  setDiaHoje(dia)
}


  return (
    <div>
       <Navbar />
  <h1>DRAGÕES</h1>
 
  <h2>porque DEUS quis! MENOS N@ {diaHoje}</h2>
<button onClick={trocardia}>TROCAR DIA</button>

    </div>
  )
}

export default Dragao
