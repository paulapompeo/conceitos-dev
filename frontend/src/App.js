import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Bino">
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
      </Header>
    </>
  )
}

export default App;

// componente, propriedade e estado