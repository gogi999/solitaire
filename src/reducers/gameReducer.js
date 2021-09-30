import undoable, { distinctState } from 'redux-undo';
import { combineReducers } from 'redux';

import deck from './deckReducer';
import board from './boardReducer';
import suits from './suitsReducer';
import cardsById from './cardsByIdReducer';

const game = combineReducers({
  deck,
  board,
  suits,
  cardsById,
});

const undoableGame = undoable(game, {
  filter: distinctState()
});

export default undoableGame;