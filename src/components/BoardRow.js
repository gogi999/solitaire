import React from 'react';
import '../assets/styles/style.css';
import CardContainer from '../containers/CardContainer';

const BoardRow = ({ boardRow, cardsShowing }) => {
    return (
        <div className="board-row">
            <div className="card"></div>
            {boardRow.map((card, i) => {
                return(
                    <div key={card}>
                    <CardContainer 
                        cardsShowing={cardsShowing} 
                        orderFromLast={i} 
                        cardId={card} 
                    />
                    </div>
                )
            })}
        </div>
    );
}

export default BoardRow;
