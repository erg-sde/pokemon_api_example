import React from 'react';

const Pokemon = props => {
return(
    <li key={props.key}>
        {props.name}
    </li>
)
}

export default Pokemon;