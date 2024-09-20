import React, { useState } from 'react'

/*Foi feita uma pesquisa entre os habitantes de uma região e 
coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
um programa que leia os dados de 10 pessoas e informe: 
 a maior e a menor altura encontrada; 
 a média de altura das mulheres; 
 a média de altura da população; 
 o percentual de homens na população. */

function Pessoinhas() {
  const [tamanhoG, setTamanhoG] = useState(null);
  const [tamanhoP, setTamanhoP] = useState(null);
  const [mediaF, setMediaF] = useState(null);
  const [mediaP, setMediaP] = useState(null);
  const [percentualH, setPercentualH] = useState(null);


  const altura = () => {
    const vetorAltura = [];
    const vetorGenero = [];
    let m = 0; // contador de homens
    let f = 0; // contador de mulheres

    for (let i = 0; i < 10; i++) {
      const pAltura = Number(prompt("QUAL A SUA ALTURA (em cm)"));
      const pGenero = Number(prompt("QUAL O SEU GENERO (0 = MASCULINO | 1 = FEMININO)"));

      vetorAltura.push(pAltura);
      vetorGenero.push(pGenero);

      if (pGenero === 0) m++;
      if (pGenero === 1) f++;
    }

    const maior = Math.max(...vetorAltura);
    const menor = Math.min(...vetorAltura);
    const mediaTotal = vetorAltura.reduce((acc, cur) => acc + cur, 0) / vetorAltura.length;

    const totalMulheres = vetorAltura.filter((_, index) => vetorGenero[index] === 1);
    const mediaMulheres = totalMulheres.length ? totalMulheres.reduce((acc, cur) => acc + cur, 0) / totalMulheres.length : 0;

    const percentualHomens = (m / 10) * 100;

    setTamanhoG(maior);
    setTamanhoP(menor);
    setMediaF(mediaMulheres);
    setMediaP(mediaTotal);
    setPercentualH(percentualHomens);

    alert(`Maior altura: ${maior} cm\nMenor altura: ${menor} cm\nMédia de altura das mulheres: ${mediaMulheres.toFixed(2)} cm\nMédia de altura da população: ${mediaTotal.toFixed(2)} cm\nPercentual de homens: ${percentualHomens.toFixed(2)}%`);
  };

  return (
    <div>
      <h1>Pesquisa de Altura e Gênero</h1>
      <button onClick={altura}>Coletar Dados</button>
      {tamanhoG !== null && tamanhoP !== null && (
        <div>
          <p>Maior Altura: {tamanhoG} cm</p>
          <p>Menor Altura: {tamanhoP} cm</p>
          <p>Média de Altura das Mulheres: {mediaF.toFixed(2)} cm</p>
          <p>Média de Altura da População: {mediaP.toFixed(2)} cm</p>
          <p>Percentual de Homens: {percentualH.toFixed(2)}%</p>
        </div>
      )}
    </div>
  )
}

export default Pessoinhas
