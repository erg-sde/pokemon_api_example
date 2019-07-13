import React from 'react';
import Pokemon from './Pokemon'

const Pokemons = props => {
    return(
        <ul>
            {props.pokemons.map(pokemon => {
                return <Pokemon {...pokemon} key={props.name} />
            })}
        </ul>
    )
}

export default Pokemons;