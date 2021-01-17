import React, { createElement } from 'react';
import './App.css';

import InformacoesBasicas from './InformacoesBasicas';
import listaDeEstados from './data';
import UltimoEmprego from './UltimoEmprego';
import BotaoFinal from './BotaoFinal';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.alerta = this.alerta.bind(this);
    this.clicou = this.clicou.bind(this);
    this.capsLock = this.capsLock.bind(this);
    this.removeSpecial = this.removeSpecial.bind(this);

    this.state = {
        nome: '',
        email: '',
        CPF: '',
        endereco: '',
        cidade: '',
        estado: 'Acre (AC)',
        cargo: '',
        resumo: '',
        jobDescription: '',
        alertaCont: 0,
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  capsLock( { target }) {
    target.value = target.value.toUpperCase();
    this.setState({nome: target.value})
  }

  removeSpecial({ target }) {
    target.value = target.value.replace(/[^a-zA-Z 0-9]+/g, "");
    this.setState({endereco: target.value})
  }

  noNumber({ target }) {
    if (!(Number.isNaN(Number(target.value[0])))) {
      target.value = '';
    }
  }

  alerta() {
    if (this.state.alertaCont === 0) {
      alert('Preencha com cuidado esta informação.')
      this.setState({alertaCont: 1});
    }
  }

  clicou({ target }) {
    return (
      target.nextSibling.innerHTML = `Nome: ${this.state.nome} // Email: ${this.state.email} //
      CPF: ${this.state.CPF} // Endereço: ${this.state.endereco} // Cidade: ${this.state.cidade} //
      Estado: ${this.state.estado} // Moradia: casa // Resumo do Currículo: ${this.state.resumo} //
      Cargo: ${this.state.cargo} // Descrição do Cargo: ${this.state.jobDescription}`
    );
  }

  render() {
    return (
      <form>
        <InformacoesBasicas
          estados={listaDeEstados}
          capsLock={this.capsLock}
          removeSpecial={this.removeSpecial}
          handleChange={this.handleChange}
          noNumber={this.noNumber}
        />
        <UltimoEmprego handleChange={this.handleChange} alerta={this.alerta} />
        <BotaoFinal clicou={this.clicou} />
      </form>
    );
  }
}

export default App;
