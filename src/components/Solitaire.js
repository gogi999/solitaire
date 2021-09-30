import React from 'react';
import '../assets/styles/style.css';
import DeckContainer from '../containers/DeckContainer';
import SuitsContainer from '../containers/SuitsContainer';
import BoardContainer from '../containers/BoardContainer';

const Solitaire = ({
    startGame, game, timer, finnished
}) => {
    return (
        <div className="solitaire">
            <div>
                <h2 className="timer">{timer.timeStr}</h2>
            </div>
            <div>
                <button 
                    className="new-game-btn"
                    onClick={() => startGame(game.cardsById)}
                >
                    New Game
                </button>
            </div>
            {finnished ?
                <div>
                    <h1 className="message">
                        Congratulations! You won!
                    </h1>
                    <h2 className="time">
                        Your time: {" "}
                        <strong>{timer.hrs ? timer.hrs + ' hrs ' : null}</strong>
                        <strong>{timer.min ? timer.min + ' min ' : null}</strong>
                        <strong>{timer.sec ? timer.sec + ' sec' : null}</strong>
                    </h2>
                </div> :
                <div>
                    <DeckContainer />
                    <SuitsContainer />
                    <BoardContainer />
                </div>
            }
        </div>
    );
}

export default Solitaire;
