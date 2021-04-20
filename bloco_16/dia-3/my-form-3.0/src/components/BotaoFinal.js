import React from 'react';

class BotaoFinal extends React.Component {
  render() {
    const { clicou, limpar } = this.props;
    return(
      <div>
        <button onClick={limpar}>Limpar</button>
        <button type="submit" onClick={ clicou }>Enviar</button>
        <div>{}</div>
      </div>
    );
  }
}

export default BotaoFinal;