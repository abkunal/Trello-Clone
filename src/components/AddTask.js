/**
 * This component adds a task to a list
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTaskAction from '../actions/addTask';

class AddTask extends Component {
  constructor(props) {
    super(props);
  
    // states to handle task name and error
    this.state = { input: '', error: '' };
  }

  /**
   * Adds a new list is name is given
   */
  handleForm = (e) => {
    e.preventDefault();
    if (!this.state.input) {
      this.setState({ error: 'Task name cannot be empty' });
    } else {
      this.props.addTask(this.props.boardId, this.props.listId, this.state.input);
      this.setState({ input: '', error: '' });
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value, error: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleForm} className="center">
        <div className="input-field">
          <input placeholder="Enter task" type="text" className="center" onChange={this.handleChange} value={this.state.input} />
        </div>
        <span className="red-text">{this.state.error}</span>
      </form>
    );
  }
}

/**
 * Attach addTask action with the props of AddTask
 * @param {Function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (boardId, listId, name) => dispatch(addTaskAction(
      boardId, listId, name)),
  }
};

export default connect(null, mapDispatchToProps)(AddTask);