/**
 * Renders a given task
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import toggleTaskAction from '../actions/toggleTask';

class Task extends Component {
  toggleTask = (e) => {
    let {boardId, listId, id} = this.props.task;
    this.props.toggleTask(boardId, listId, id);
  }

  render() {
    let decor = 'none', opacity = 1;

    // task is marked completed
    if (this.props.task.completed) {
      decor = 'line-through';
      opacity = 0.5
    }
    return (
      <div className="card cyan darken-1 white-text pointer" style={{opacity: opacity}} onClick={this.toggleTask}>
        <div className="card-content center">
          <span style={{textDecoration: decor}}>{this.props.task.name}</span>
        </div>
      </div>
    );
  }
}

/**
 * Attach toggleTask action with the props of AddTask
 * @param {Function} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTask: (boardId, listId, taskId) => dispatch(toggleTaskAction(boardId,listId,taskId))
  }
};

export default connect(null, mapDispatchToProps)(Task);