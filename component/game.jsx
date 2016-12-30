import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = { board: new Minesweeper.Board(9, 10) };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (<Board board={this.state.board} updateGame={this.updateGame}/>);
  }
}

export default Game;
