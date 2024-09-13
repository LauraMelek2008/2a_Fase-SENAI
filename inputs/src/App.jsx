import { useState } from 'react'

import './App.css'
import Maior from './components/Maior'
import Menor from './components/Menor'
import Semana from './components/Semana'

function App() {
const [inputIdade, setInputIdade] = useState(0)
const [maior, setMaior] = useState(false)
const [menor, setMenor] = useState(false)


function processarIdade(){
if(inputIdade >= 18){
alert("Maior de idade")
setMaior(true)
setMenor(false)
}else{
alert('Dímenó')
setMenor(true)
setMaior(false)
}

}



return (
<>
<h1>INPUTS</h1>

idade:
<input type="number" className='formularios'
value={inputIdade}
onChange={(event) => {setInputIdade(event.target.value)}}
/>
<button onClick={processarIdade}>PROCESSAR IDADE</button>

{/*inputIdade*/}
{maior && <Maior/>}
{menor && <Menor/>}
        
<h1>DIAS DA SEMANA</h1>

<Semana/>

</>

)
}

export default App
