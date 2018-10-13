/**
 * This component displays the available boards on the page and gives a nice
 * form to create a new board
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import AddBoard from './AddBoard';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    // toggles create new board form
    this.state = {
      showBoardForm: false,
    }
  }

  toggleShowBoardForm = () => {
    this.setState({ showBoardForm: !this.state.showBoardForm });
  }

  render() {
    let { boards } = this.props;

    // creates a list of boards if boards are present
    let boardsList = boards.length ? (
      // boards present
      boards.map((board, index) => {
        return (
          <Link key={index} to={'/' + board.id}>
            <Board board={board} />
          </Link>
        );
      })
    ) : (
        // boards not present
        <div className="col s4">
          <div className="card center">
            <div className="card-content">
              <div className="card-title">
                You do not have any boards yet
            </div>
            </div>
          </div>
        </div>
      );

    // depending on the state, shows user either the add board form or button
    // to show add board form
    let addFormMsg = this.state.showBoardForm ? (
      <AddBoard cancel={this.toggleShowBoardForm} />
    ) : (
        <div onClick={this.toggleShowBoardForm} style={{ cursor: 'pointer' }}
          className="card col s4 teal darken-4 white-text">
          <div className="card-content center">
            <div className="card-title">Create a new Board...</div>
          </div>
        </div>
      );

    return (
      <div className="row">
        {addFormMsg}
        {boardsList}
      </div>
    );
  }
};

/**
 * Pass boards to Home component from the Redux store
 * @param {Object} state
 */
const mapStateToProps = (state) => {
  return {
    boards: state.boards
  };
};

// export the component and attach mapStateToProps function to add props to home
export default connect(mapStateToProps)(Home);