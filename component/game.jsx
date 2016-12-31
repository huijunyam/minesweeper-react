import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = { board: new Minesweeper.Board(9, 10) };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  render() {
    let gameOverText = "";
    if (this.state.board.won()) {
      gameOverText = "You won!!!";
    } else if (this.state.board.lost()) {
      gameOverText = "You lost!!!";
    }

    return (
      <div>
        <h1>{gameOverText}</h1>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;
