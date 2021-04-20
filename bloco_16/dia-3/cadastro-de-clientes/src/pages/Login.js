import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { authenticate } from '../actions/index';

import '../App.css';

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      senha: '',
    }
  }

  render() {
    const { email, senha } = this.state;
    const { login, authenticated } = this.props;

    function fazerLogin() {
      if (email !== '' && senha !== '') {
        login(true);
      }
    }

    return (
      <div>
        <fieldset className="login-field">
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ ({ target }) => this.setState({email: target.value}) }
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              value={ senha }
              onChange={ ({ target }) => this.setState({senha: target.value}) }
            />
          </label>
          <label>
            <button type="button" onClick={() => fazerLogin()}>Entrar</button>
            {authenticated ? <Redirect to="/client-list" /> : console.log('faça login')}
          </label>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authReducer.authenticated,
})

const mapDispatchToProps = (dispatch) => ({
  login: (authenticated) => dispatch(authenticate(authenticated)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
