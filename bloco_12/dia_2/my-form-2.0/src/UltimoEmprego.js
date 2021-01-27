import React from 'react';

class UltimoEmprego extends React.Component {
    render() {
        const { alerta, handleChange } = this.props;
        return(
            <fieldset className="ultimoEmprego">
                Resumo do currículo: <br />
                <textarea name="resumo" maxLength="1000" onChange={handleChange} required /> <br />
                Cargo: <br />
                <input name="cargo" type="text" maxLength="40" onChange={handleChange} onMouseEnter={ alerta } required /> <br />
                Descrição do cargo: <br />
                <textarea name="jobDescription" onChange={handleChange} maxLength="500" required />
            </fieldset>
        );
    }
}

export default UltimoEmprego;