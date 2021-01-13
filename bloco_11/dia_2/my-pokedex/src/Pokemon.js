import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        return (
            <div className="pokemonCard">
                <ul>
                    <li>Nome: {this.props.name}</li>
                    <li>Tipo: {this.props.type}</li>
                    <li>Peso: {this.props.weight.value} {this.props.weight.measurementUnit}</li>
                </ul>
                <img src={this.props.image} />
            </div>
        );
    }
}

Pokemon.propType = {
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.object,
    image: PropTypes.string
}

export default Pokemon;