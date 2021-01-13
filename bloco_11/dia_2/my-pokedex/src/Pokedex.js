import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <Pokemon name={name} type={type} weight={averageWeight} image={image}/>
        );
    }
}

Pokedex.propType = {
    pokemon: PropTypes.object
}

export default Pokedex;