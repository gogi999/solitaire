import React from 'react';
import '../assets/styles/style.css';
import CardContainer from '../containers/CardContainer';

const Suit = ({ suits, id }) => {
    const cards = suits[id];
        
    return (
        <div className="suitRow">
            <div className="card"></div>
            {cards.map(card => {
                return(
                    <CardContainer 
                        key={card} 
                        cardId={card} 
                    />
                );
            })}
        </div>
    );
}

export default Suit;
