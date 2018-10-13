/**
 * Displays a single Board card on the home page
 */

import React from 'react';

const Board = (props) => {
  let {board} = props;
  return (
    <div className="col l4 m6 s12">
      <div className="card blue-grey darken-2">
        <div className="card-content white-text">
          <div className="card-title center">
            {board.title}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Board;