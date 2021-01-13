import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <div className="pokemonCard">
                <ul>
                    <li>Nome: {this.props.name}</li>
                    <li>Tipo: {this.props.type}</li>
                    <li>Peso: {this.props.weight.value} {this.props.weight.measurementUnit}</li>
                </ul>
                <img src={this.props.image} alt={this.props.alt}/>
            </div>
        );
    }
}


export default Pokemon;