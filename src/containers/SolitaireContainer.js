import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Solitaire from '../components/Solitaire';
import { startGame, stopTimer } from '../actions';

const mapStateToProps = ({ undoableGame, timer }) => {
  const cardsDone = Object.keys(undoableGame.present.suits).map((arr) => {
    return undoableGame.present.suits[arr].length;
  }).reduce((total, len) => {
    return total + len;
  }, 0);
  const finnished = cardsDone === 52;

  return {
    game: undoableGame.present,
    finnished,
    timer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (cards) => {
      dispatch(startGame(cards));
    },
    stopTimer: () => {
      dispatch(stopTimer());
    }
  }
}

class SolitaireContainer extends Component {
  componentDidMount() {
    this.props.startGame(this.props.game.cardsById);
  }

  componentWillReceiveProps() {
    if(this.props.finnished && this.props.timer.timerActive) {
      this.props.stopTimer();
    }
  }

  render() {
    return(
      <Solitaire {...this.props} />
    );
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DragDropContext(HTML5Backend),
)(SolitaireContainer);
