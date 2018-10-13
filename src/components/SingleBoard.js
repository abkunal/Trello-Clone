/**
 * Displays lists and tasks of a single board
 */

import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import AddList from './AddList';


const SingleBoard = (props) => {
    let { board, lists } = props;
    if (board) {
      return (
        <div>
          <div className="row">
            <div className="col s12 m6 l4">
            <div className="card blue white-text">
              <div className="card-content">
                <div className="card-title center">
                  {board.title}
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="row">
            <AddList boardId={board.id} />
            {
              // show lists of the current board
              lists.map((list, index) => <List list={list} key={index} />)
            }
          </div>
        </div>
      );
    }

    return (
      <div className="center middle">
        Board with the given id does not exist
      </div>
    );
}

/**
 * Attach board and lists to the props of SingleBoard component
 * @param {Object} state
 * @param {Object} ownProps
 */
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.board_id;
  let myBoard, myLists = [];

  // find the right board from the redux store
  for (let board of state.boards) {
    if (board.id === Number(id)) {
      myBoard = board;
      break;
    }
  }

  // find the lists of the right board
  for (let list of state.lists) {
    if (list.boardId === Number(id)) {
      myLists.push(list);
    }
  }
  return {
    board: myBoard,
    lists: myLists,
  };
};

export default connect(mapStateToProps)(SingleBoard);