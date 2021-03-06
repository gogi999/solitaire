import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';

import { moveCard } from '../actions';

import BoardRow from '../components/BoardRow';


const mapStateToProps = (state) => {
  return {
    boards: state.undoableGame.present.board,
    deck: state.undoableGame.present.deck,
    cardsById: state.undoableGame.present.cardsById,
    suits: state.undoableGame.present.suits,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (targetRow, currentPlace, cardId) => {
      dispatch(moveCard(targetRow, currentPlace, cardId));
    }
  }
}

class BoardFetcher extends Component {
  render() {
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <div>
        <BoardRow {...this.props} />
      </div>
    )
  }
}

const cardTarget = {
  hover(targetProps, monitor) {
    
  },

  drop(targetProps, monitor, component) {
    const { cardsById, moveCard, boardRow, boards, suits, deck, id } = targetProps;
    const droppedCard = cardsById[monitor.getItem().id];
    let currentPlacement = deck.drawn.indexOf(droppedCard.id) !== -1 ? 'DECK' : '';
    if(currentPlacement === '') {
      for(let key in boards) {
        if(boards[key].indexOf(droppedCard.id) !== -1) {
          currentPlacement = 'BOARD';
          break;
        }
      }
    }
    if(currentPlacement === '') {
      for(let key in suits) {
        if(suits[key].indexOf(droppedCard.id) !== -1) {
          currentPlacement = 'SUITS';
          break;
        }
      }
    }

    if(boardRow.length === 0 && droppedCard.value === 13) {
      moveCard(id, currentPlacement, droppedCard.id);
      return;
    }

    let targetCard = cardsById[boardRow[boardRow.length - 1]]

    if( targetCard ) {
      if(droppedCard.show && targetCard.show &&  droppedCard.value === targetCard.value - 1 && targetCard.suitColor !== droppedCard.suitColor) {
        moveCard(id, currentPlacement, droppedCard.id);
      }
    }
  }
};

const BoardContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DropTarget('card', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
)(BoardFetcher);

export default BoardContainer;