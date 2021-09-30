import React from 'react';
import '../assets/styles/style.css';
import SuitContainer from '../containers/SuitContainer';

const Suits = ({ suits }) => {
    return(
        <div className="suits">
            {Object.keys(suits).map(suit => {
                return (
                    <SuitContainer id={suit} key={suit} />
                );
            })}
        </div>
    );
}

export default Suits;
