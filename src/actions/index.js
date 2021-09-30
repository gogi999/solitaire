let timer = null;
const timerTick = () => {
    return {
        type: 'TIMER_TICK'
    }
}

export const startGame = (cards, dispatch) => {
    return (dispatch) => {
        const cardsIds = Object.keys(cards).map((card) => parseInt(card, 10));

        let x, y, z;
        y = cardsIds.length;

        while(y) {
            x = Math.random() * (--y + 1) | 0;
            z = cardsIds[y];
            cardsIds[y] = cardsIds[x];
            cardsIds[x] = z;
        }

        const cardsInDeck = cardsIds.slice(0, 24);
        const cardsOnBoard = cardsIds.slice(24);
        const cardsToTurn = cardsOnBoard.filter((card, i) => {
            return i === 0 || i === 2 || i === 5 || i === 9 || i ===  14 ||i === 20 || i === 27;
        });

        clearInterval(timer);

        dispatch({
            type: 'TIMER_START'
        });

        timer = setInterval(() => dispatch(timerTick()), 1000);

        dispatch({
            type: 'START_GAME',
            payload: {
                cardsInDeck,
                cardsOnBoard,
                cardsToTurn
            }
        });
    }
}

export const stopTimer = () => {
  clearInterval(timer)
  return {
    type: 'TIMER_STOP'
  }
}


export const resetDeck = (deck) => {
  return {
    type: 'RESET_DECK',
    payload: {
      deck
    }
  }
}

export const drawFromDeck = (card) => {
  return {
    type: 'DRAW_FROM_DECK',
    payload: {
      card
    }
  }
}

export const moveCard = (targetRow, currentPlace, cardId) => {
  return {
    type: 'MOVE_CARD',
    payload: {
      targetRow,
      currentPlace,
      cardId
    }
  }
}

export const turnCard = (id) => {
  return {
    type: 'TURN_CARD',
    payload: {
      id
    }
  }
}

export const addToSuits = (suitsId, cardId) => {
  return {
    type: 'ADD_TO_SUITS',
    payload: {
      suitsId,
      cardId
    }
  }
}
