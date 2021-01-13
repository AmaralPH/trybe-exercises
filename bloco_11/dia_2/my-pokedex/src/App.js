import React from 'react';

import data from './data';
import Pokedex from './Pokedex';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <div className="pokemonList">
          {data.map((pokemon, index) => {
            return <Pokedex pokemon={pokemon} key={pokemon+index}/>
          })}
        </div>
      </div>
    );
  }

}

export default App;
