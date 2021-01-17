import React from 'react';

class BotaoFinal extends React.Component {
    render() {
        const { clicou } = this.props;
        return(
            <div>
                <button type="submit" onClick={ clicou }>Enviar</button>
                <div>{}</div>
            </div>

        );
    }
}

export default BotaoFinal;