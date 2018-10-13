/**
 * This component renders a list along with its tasks
 */

import React from 'react';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import Task from './Task';


const List = (props) => {
  let { list, tasks } = props;
  let tasksList = tasks.length ? (
    tasks.map(task => {
      return <Task task={task} key={task.id} />
    })
  ) : (
      <div className="center">
        <span>No tasks yet</span>
      </div>
    );

  return (
    <div className="col l4 m6 s12">
      <div className="card">
        <div className="card-content">
          <div className="card-title center">
            <strong>{list.name}</strong>
          </div>
          <AddTask boardId={list.boardId} listId={list.id} />
          {tasksList}
        </div>
      </div>
    </div>
  );
}

/**
 * Pass tasks of the given list to the List Component from the redux store
 * @param {Object} state
 * @param {Object} ownProps
 */
const mapStateToProps = (state, ownProps) => {
  let boardId = ownProps.list.boardId;
  let listId = ownProps.list.id;
  let tasks = state.tasks.filter((task) => {
    return task.boardId === boardId && task.listId === listId;
  });

  return {
    tasks: tasks,
  };
};

export default connect(mapStateToProps)(List);