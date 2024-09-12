import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Pages1 from './pages/Pages1'
import Pages2 from './pages/Pages2'
import Rander from './pages/Rander'

function App() {
  const [pagina, setPagina] = useState(<Home/>)
//let idade
//onsole.log(idade)
//onsole.log(pagina)
//dade = 19
//etPagina(19)
function mostrarPages1(){
  setPagina(<Pages1/>)
}
function mostrarPages2(){
  setPagina(<Pages2/>)
}
function mostrarHome(){
  setPagina(<Home/>)
}
  return (
    <>
    <nav>
      

      <button onClick={mostrarPages1}>Pages1</button>
      <button onClick={mostrarHome}>Home</button>
      <button onClick={() => {(setPagina(<Pages2/>))} }>Pages2</button>
      <button onClick={() => {(setPagina(<Rander/>))} }> Rander </button>
     
    </nav>

    {pagina}
    </>
  )
}

export default App
