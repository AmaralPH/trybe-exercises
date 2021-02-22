import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayDeCompromicos = ['limpar a casa', 'fazer aulas atrasadas', 'concluir projeto', 'cozinhar jantar']

class App extends React.Component {
  render() {
    return (
      <div>
        {arrayDeCompromicos.map((value) => task(value))}
      </div>
    )
  }
}


export default App;
