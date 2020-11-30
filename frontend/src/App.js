import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`); nao faz mais assim

    setProjects([...projects, `Novo Projeto ${Date.now()}`]) //conceito de imutabilidade

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
      {/* <Header title="Bino">
        <ul>
          <li>petisco</li>
          <li>passear</li>
        </ul>
      </Header>
      <Header title="Paula">
        <ul>
          <li>comer</li>
          <li>dormir</li>
        </ul>
      </Header>
      <Header title="Livia">
        <ul>
          <li>palmeiras</li>
        </ul>
      </Header> */}
    </>
  )
}

export default App;

// componente, propriedade e estado (e imutabilidade)

//map -> percorre e retorna

//useState retorna um array com 2 posicoes
//1. Variavel com o seu valor inicial
//2. Funcao para atualizarmos o valor