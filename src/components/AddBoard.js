/**
 * This component adds a new board
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import addBoardAction from '../actions/addBoard';

class AddBoard extends Component {
  constructor(props) {
    super(props);

    // states to handle board name and error
    this.state = { input: '', error: '' };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value, error: '' });
  }

  /**
   * Adds a new board is name is given
   */
  handleForm = (e) => {
    e.preventDefault();
    if (!this.state.input) {
      this.setState({ error: 'Board name cannot be empty' });
    } else {
      this.props.addBoard(this.state.input);
      this.setState({ input: '', error: '' });
    }
  }

  render() {
    return (
      <div className="col s12 m6 l4">
        <div className="card col m6 l4 s12 blue darken-2 white-text">
          <h5 className="center">Board Name</h5>
          <form onSubmit={this.handleForm} className="center addBoardForm">
            <div className="input-field center">
              <input autoFocus id="boardName" type="text" className="center white-text" onChange={this.handleChange} value={this.state.input} />
            </div>
            <span className="center">{this.state.error}</span>
            <div>
              <button type="button" onClick={this.props.cancel} className="btn white black-text center col offset-s1 s4">Cancel</button>
              <button type="submit" className="btn white black-text center col offset-s2 s4">Add Board</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

/**
 * Attach the addBoard action as a prop to the AddBoard Component
 * @param {Function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    addBoard: (name) => { dispatch(addBoardAction(name)) },
  };
};

export default connect(null, mapDispatchToProps)(AddBoard);