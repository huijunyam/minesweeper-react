import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = { board: new Minesweeper.Board(9, 10) };
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  restartGame() {
    const board = new Minesweeper.Board(9, 10);
    this.setState({ board });
  }

  render() {
    let gameOver;
    if (this.state.board.lost() || this.state.board.won()) {
      const gameOverText = this.state.board.won() ? "You won!" : "You lost!";
      gameOver = (
        <div className='modal-screen'>
          <div className='modal-content'>
            <p>{gameOverText}</p>
            <button onClick={this.restartGame}>Play Again</button>
          </div>
        </div>);
    }

    return (
      <div>
        {gameOver}
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;
