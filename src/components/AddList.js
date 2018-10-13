/**
 * This component adds a new list to a board
 */

import React, { Component } from 'react';
import addListAction from '../actions/addList';
import { connect } from 'react-redux';


class AddList extends Component {
  constructor(props) {
    super(props);

    // states to handle list name and error
    this.state = { input: '', error: '' };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value, error: '' });
  }

  /**
   * Adds a new list is name is given
   */
  handleForm = (e) => {
    e.preventDefault();
    if (!this.state.input) {
      this.setState({ error: 'List name cannot be empty' });
    } else {
      this.props.addList(this.props.boardId, this.state.input);
      this.setState({ input: '', error: '' });
    }
  }

  render() {
    return (
      <div className="card col s4 blue darken-2 white-text">
        <div className="card-content">
          <div className="card-title center">
            Add a list
          </div>
          <form onSubmit={this.handleForm} className="center">
            <div className="input-field center">
              <input autoFocus type="text" className="center white-text" onChange={this.handleChange} value={this.state.input} />
            </div>
            <span className="center">{this.state.error}</span>
            <div>
              <button type="submit" className="btn white black-text center">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

/**
 * Attach addList action with the props of AddList component
 * @param {Function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    addList: (boardId, name) => dispatch(addListAction(boardId, name)),
  };
}

export default connect(null, mapDispatchToProps)(AddList);