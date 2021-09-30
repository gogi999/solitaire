import React from 'react'
import '../assets/styles/style.css';
import BoardRowContainer from '../containers/BoardRowContainer';

const Board = ({ board, cardsShowing }) => {
    return (
        <div className="board">
            <div className="board-rows">
                {Object.keys(board).map(row => {
                    return (
                        <BoardRowContainer 
                            key={row} 
                            id={row} 
                            boardRow={board[row]} 
                            cardsShowing={cardsShowing[row]} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Board;
