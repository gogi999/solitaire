import { combineReducers } from 'redux';
import timer from './timerReducer';
import undoableGame from './gameReducer';

const reducers = combineReducers({
    timer,
    undoableGame
});

export default reducers;
