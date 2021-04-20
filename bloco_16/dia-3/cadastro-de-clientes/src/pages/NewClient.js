import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clientAction } from '../actions/index';

class NewClient extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      idade: '',
      email: '',
    }
  }

  render() {
    const { adicionar } = this.props;
    const { nome, idade, email } = this.state;

    return (
      <fieldset className="login-field">
        <label>Nome
          <input type="text" onChange={({target}) => this.setState({nome: target.value})} />
        </label>
        <label>Idade
          <input type="number" onChange={({target}) => this.setState({idade: target.value})} />
        </label>
        <label>Email
          <input type="text" onChange={({target}) => this.setState({email: target.value})} />
        </label>
        <label>
          <button onClick={() => adicionar(nome, idade, email)}>Adicionar</button>
          <Link to="/client-list">
            <button>Clientes cadastrados</button>
          </Link>
        </label>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  adicionar: (nome, idade, email) => dispatch(clientAction(nome, idade, email))
})

export default connect(null, mapDispatchToProps)(NewClient);
