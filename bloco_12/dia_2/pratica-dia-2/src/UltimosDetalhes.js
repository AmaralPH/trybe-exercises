import React from 'react';

class UltimosDetalhes extends React.Component {
    render() {
        const { news, coment, handleChange, handleError, erro } = this.props;

        let error = undefined;
        if (coment.length < 3) {
            error = 'Escreva algum comentário, por favor';
            erro = true;
        }

        return (
            <fieldset className="ultimosDetalhes">
                <label> Deseja assinar a newsletter? <br />
                    <input
                        className="checkbox entrada"
                        name="news"
                        value={news}
                        onChange={handleChange}
                        type="checkbox" 
                    /> <br />
                </label>
                Algum comentário? <br />
                <textarea
                    className="coment entrada"
                    name="coment"
                    value={coment}
                    onChange={handleChange, handleError}
                /> <br />
                <span>{error !== undefined ? error : ''}</span>
                Envie seu curriculo: <br />
                <input type="file" />
          </fieldset>
        );
    }
}

export default UltimosDetalhes;