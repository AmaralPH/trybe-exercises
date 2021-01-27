import React from 'react';

class DadosPessoais extends React.Component {
    render() {
        const { nome, dia, handleChange, handleError } = this.props;

        let error = undefined;
        if (nome.length > 15) {
            error = 'Seu nome é grande demais, você é da família real?';
            this.props.erro = true;
        } else if (/[0-9]/.test(nome)) {
            error = 'O seu nome possui números, você é filho do Elon Musk?';
            this.props.erro = true;
        }

        return (
            <fieldset className="dados-pessoais">
                Qual seu nome? <br />
                <input
                    className="nome entrada"
                    name="nome"
                    value={nome}
                    onChange={handleChange, handleError}
                    type="text"
                /> <br />
                <span className="error">{error !== undefined ? error : ''}</span>
                
                Que dia você nasceu? <br />
                <input
                    className="data entrada"
                    name="dia"
                    value={dia}
                    onChange={handleChange}
                    type="date"
                />
            </fieldset>
        );
    }
}

export default DadosPessoais;