import React, { useState } from 'react'
import PainelAdm from '../components/PainelAdm'
import './Rander.css'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'
import UsuarioLogado from '../components/UsuarioLogado'
import Login from '../components/Login'
function Rander() {
const [adm, setAdm] = useState(true)
const [idade, setIdade] = useState(0)
const [usuario, setUsuario] = useState(false)
  return (
    <div>
    <h1>Renderização condicionais</h1>
    <div className='render-container'>
        <button onClick={() => (setAdm(true))}>com adm</button>
        <button onClick={() => (setAdm(false))}>sem adm</button>
{adm && <PainelAdm/>}
    </div>
    <div className='render-container'>
<button onClick={() => (setIdade(idade-1))}>-</button>
       {idade} 
<button onClick={() => (setIdade(idade+1))}>+</button>
{idade >= 18 && <ProdutosParaMaiores/>}
    </div>
    <div className='render-container'>
<button onClick={() => (setUsuario(true))}>Logar</button>
<button onClick={() => (setUsuario(false))}>10Logar</button>
{usuario ? <UsuarioLogado/> : <Login/>}
    </div>
    </div>
  )
}

export default Rander
