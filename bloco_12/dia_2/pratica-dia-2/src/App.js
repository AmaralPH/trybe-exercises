import React from 'react';
import './App.css';

import TecnologiaPreferida from './TecnologiaPreferida';
import DadosPessoais from './DadosPessoais';
import UltimosDetalhes from './UltimosDetalhes';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      news: false,
      coment: '',
      dia: '',
      erro: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleError({ target }) {
    if (target.erro) {
      this.setState({
        erro: true
      });
    }
  }

  render() {
    return (
      <div className="corpo">
        <h1>Esse é um formulário</h1>
        <form className="form">
          <TecnologiaPreferida
            select={this.state.select}
            handleChange={this.handleChange}
          />
          <DadosPessoais
            dia={this.state.dia}
            nome={this.state.nome}
            erro={this.state.erro}
            handleChange={this.handleChange}
            handleError={this.handleError}
          />
          <UltimosDetalhes
            news={this.state.news}
            coment={this.state.coment}
            erro={this.state.erro}
            handleChange={this.handleChange}
            handleError={this.handleError}
          />
          <input type="submit" value="Enviar" className="submit" />
        </form>
      </div>
    );
  }
}




export default App;
