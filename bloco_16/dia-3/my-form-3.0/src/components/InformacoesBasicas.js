import React from 'react';
import { connect } from 'react-redux';
import { createChangeInfoAction } from '../actions/index';

class InformacoesBasicas extends React.Component {
  render() {
    const { handleChange, estados, capsLock, removeSpecial, noNumber, testaEmail } = this.props;

    return (
      <fieldset className="dados">
        Nome:
        <input
          name="nome"
          className="nome"
          type="text"
          onChange={({ target }) => handleChange('nome', target.value), capsLock}
          maxLength="40"
          required
        />
        Email:
        <input
          name="email"
          className="email"
          type="text"
          onChange={({ target }) => handleChange('email', target.value), testaEmail}
          maxLength="50"
          required
        />
        CPF:     
        <input
          name="CPF"
          className="CPF"
          type="text"
          onChange={({ target }) => handleChange('CPF', target.value)}
          maxLength="11"
          required
        />
        Endereço:
        <input
          name="endereco"
          className="endereco"
          type="text"
          onChange={({ target }) => handleChange('endereco', target.value), removeSpecial}
          maxLength="200"
          required
        />
        Cidade:
        <input
          name="cidade"
          className="cidade"
          type="text"
          onChange={({ target }) => handleChange('cidade', target.value)}
          onBlur={noNumber}
          maxLength="28"
          required
        />
        Estado:
        <select
          name="estado"
          className="estado"
          onChange={({ target }) => handleChange('estado', target.value)}
          required
        >
          {estados.map((estado) => <option key={estado}>{estado}</option>)}
        </select>
        <label htmlFor="casa">
          <input value="casa" name="moradia" className="moradia" type="radio" onChange={handleChange} />
          Casa
        </label>
        <label htmlFor="apartamento">
          <input value="apartamento" name="moradia" className="moradia" onChange={handleChange} type="radio" />
          Apartamento
        </label>
      </fieldset>  
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.name,
  email: state.email,
  CPF: state.CPF,
  endereco: state.endereco,
  cidade: state.cidade,
  estado: state.estado,
  moradia: state.moradia,
})

const mapDispatchToProps = (dispatch) => ({
  handleChange: (info, value) => dispatch(createChangeInfoAction(info, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InformacoesBasicas);