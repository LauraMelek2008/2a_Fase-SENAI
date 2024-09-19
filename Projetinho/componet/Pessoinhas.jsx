import React, { useState } from 'react'

/*Foi feita uma pesquisa entre os habitantes de uma região e 
coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
um programa que leia os dados de 10 pessoas e informe: 
 a maior e a menor altura encontrada; 
 a média de altura das mulheres; 
 a média de altura da população; 
 o percentual de homens na população. */

function Pessoinhas() {
const [tamanho, setTamanho] = useState()

function altura(){
vetor1 = []
vetor2 = []

for(let i = 0; i < 10; i++){
let pAltura = Number(prompt("QUAL A SUA ALTURA"))
let pGenero = Number(prompt("QUAL O SEU GENERO (0 = MASCOLINO | 1 = FEMININO)"))
let masc = "mascolino"
let femi = "feminino"

if(pGenero == 0){
vetor1.push(masc)
vetor2.push(pAltura)
}
else if(pGenero == 1){
    vetor1.push(femi)
    vetor2.push(pAltura)
    }
}





















}

  return (
    <div>
      
    </div>
  )
}

export default Pessoinhas
