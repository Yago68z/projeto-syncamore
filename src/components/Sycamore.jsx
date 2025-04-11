import React from 'react';
import './Sycamore.css';

function Sycamore() {
  return (
    <div className="sycamore-container">
      <h1>O Processador do Google: Sycamore</h1>
      <p>
        O Sycamore é um processador quântico desenvolvido pelo Google que atingiu a supremacia quântica em 2019.
        Ele foi capaz de realizar um cálculo que levaria milhares de anos em supercomputadores clássicos, em apenas alguns segundos.
      </p>

      <h2>Funções</h2>
      <ul>
        <li>Executa cálculos extremamente complexos com velocidade impressionante.</li>
        <li>Projetado para pesquisas em física quântica e inteligência artificial.</li>
        <li>Avanço no desenvolvimento de algoritmos quânticos.</li>
      </ul>

      <h2>Para que serve?</h2>
      <p>O Sycamore pode ser usado para:</p>
      <ul>
        <li>Simulações químicas em nível molecular.</li>
        <li>Criptografia quântica.</li>
        <li>Machine learning com processamento quântico.</li>
      </ul>

      <a 
        href="https://ai.googleblog.com/2019/10/quantum-supremacy-using-sycamore.html" 
        target="_blank" 
        rel="noopener noreferrer"
        className="button"
      >
        Saiba mais no blog do Google
      </a>
    </div>
  );
}

export default Sycamore;