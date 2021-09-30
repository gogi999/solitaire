import React from 'react';
import '../assets/styles/style.css';
import CardContainer from '../containers/CardContainer';

const Deck = ({ resetDeck, deck }) => {
    return(
        <div className="deck">
        <div className="pile not-drawn-cards">
            <div 
                className="card" 
                onClick={() => resetDeck(deck)}
            ></div>
            {deck.notDrawn.map((cardId, i) => {
                return (
                    <CardContainer 
                        key={cardId} 
                        orderFromLast={i} 
                        cardId={cardId} 
                    />
                );
            })}
        </div>
        <br/>
        <div className="pile drawn-cards">
            {deck.drawn.map((cardId, i) => {
                return (
                    <CardContainer 
                        key={cardId} 
                        orderFromLast={i} 
                        cardId={cardId} 
                    />
                );
            })}
        </div>
        </div>
    );
}

export default Deck;
