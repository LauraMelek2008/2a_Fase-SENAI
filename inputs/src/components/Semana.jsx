import { useState } from "react";

function Semana() {
    const [inputValue, setInputValue] = useState(0);
    const [diaSemana, setDiaSemana] = useState("");

    function semana() {
        const dia = parseInt(inputValue); 
        switch(dia) {
            case 1: setDiaSemana('Hoje é domingo'); break;
            case 2: setDiaSemana('Hoje é segunda'); break;
            case 3: setDiaSemana('Hoje é terça'); break;
            case 4: setDiaSemana('Hoje é quarta'); break;
            case 5: setDiaSemana('Hoje é quinta'); break;
            case 6: setDiaSemana('Hoje é sexta'); break;
            case 7: setDiaSemana('Hoje é sábado'); break;
            default: setDiaSemana('Número inválido');
        }
    }

    return (
        <div>
            Dia da semana: 
            <input 
                type="number" 
                value={inputValue} 
                onChange={(event) => setInputValue(event.target.value)} 
            />
            <button onClick={semana}>Verificar Dia</button>
            <p>{diaSemana}</p>
        </div>
    );
}

export default Semana
