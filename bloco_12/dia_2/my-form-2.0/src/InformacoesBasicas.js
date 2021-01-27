import React from 'react';

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
                    onChange={handleChange, capsLock}
                    maxLength="40"
                    required
                />
                Email:
                <input
                    name="email"
                    className="email"
                    type="text"
                    onChange={handleChange, testaEmail}
                    maxLength="50"
                    required
                />
                CPF:     
                <input
                    name="CPF"
                    className="CPF"
                    type="text"
                    onChange={handleChange}
                    maxLength="11"
                    required
                />
                Endereço:
                <input
                    name="endereco"
                    className="endereco"
                    type="text"
                    onChange={handleChange, removeSpecial}
                    maxLength="200"
                    required
                />
                Cidade:
                <input
                    name="cidade"
                    className="cidade"
                    type="text"
                    onChange={handleChange}
                    onBlur={noNumber}
                    maxLength="28"
                    required
                />
                Estado:
                <select
                    name="estado"
                    className="estado"
                    onChange={handleChange}
                    required
                >
                    {estados.map((estado) => <option key={estado}>{estado}</option>)}
                </select>
                <label htmlFor="casa">
                    <input value="casa" name="moradia" className="moradia" type="radio" onChange={handleChange} />
                Casa</label>
                <label htmlFor="apartamento">
                    <input value="apartamento" name="moradia" className="moradia" onChange={handleChange} type="radio" />
                Apartamento</label>
            </fieldset>  
        );
    }
}

export default InformacoesBasicas;