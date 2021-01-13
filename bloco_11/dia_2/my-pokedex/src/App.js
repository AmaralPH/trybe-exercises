import React from 'react';
import PropTypes from 'prop-types';

import data from './data';
import Pokedex from './Pokedex';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <div className="pokemonList">
          {console.log(data)}
          {data.map((pokemon) => {
            return <Pokedex pokemon={pokemon}/>
          })}
        </div>
      </div>
    );
  }

}

export default App;
