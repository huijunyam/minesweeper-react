import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.renderGrid = this.renderGrid.bind(this);
    this.renderTile = this.renderTile.bind(this);
  }

  render() {
    return (
      <div className="grid">
        {this.renderGrid()}
      </div>
    );
  }

  renderGrid() {
    const grid = this.props.board.grid;
    return grid.map((row, idx) => {
      return (
        <div className="row" key={idx}>
          {this.renderTile(row, idx)}
        </div>
      );
    });
  }

  renderTile(row, idx) {
    const size = this.props.board.gridSize;
    return row.map((tile, idx2) => {
      return (
        <Tile key={idx * size + idx2} tile={tile} updateGame={this.props.updateGame} />
      );
    });
  }
}

export default Board;
