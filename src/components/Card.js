import React from 'react';
import '../assets/styles/card.css';

const Card = ({ cardClickAction, deck, cardId, cardsById }) => {
    const handleClick = (card) => {
        cardClickAction(card, deck);
    }
    const id = cardId;
    const card = cardsById[id];
    let cardValue;

    switch (card.value) {
        case 1:
            cardValue = 'A';
            break;
        case 11:
            cardValue = 'J';
            break;
        case 12:
            cardValue = 'Q';
            break;
        case 13:
            cardValue = 'K';
            break;
        default:
            cardValue = card.value; 
    }

    return (
        <div 
            className="card" 
            onClick={() => handleClick(card)} 
        >
            <div 
                className={card.show 
                    ? 'face ' + card.suit 
                    : 'back'
                }
            >
                <div className="card-value top">
                    <div>{cardValue}</div>
                    <div className={'suit ' + card.suit}></div>
                </div>
                <div className={'large suit ' + card.suit}></div>
                <div className="card-value bottom">
                    <div>{cardValue}</div>
                    <div className={'suit ' + card.suit}></div>
                </div>
            </div>
        </div>
    )
}

export default Card;
