/**
 * Defines the reducer for the Redux store
 */

// dependencies
import addBoardReducer from './addBoard';
import addListReducer from './addList';
import addTaskReducer from './addTask';
import toggleTaskReducer from './toggleTask';


// initialize state
const initState = {
  boards: [],
  lists: [],
  tasks: [],
  total: 0,
};

// get data stored in localStorage
let boards = localStorage.getItem('boards');
let lists = localStorage.getItem('lists');
let tasks = localStorage.getItem('tasks');
let total = localStorage.getItem('total');

// if data present in localStorage, show it
if (boards) initState.boards = JSON.parse(boards)
if (lists) initState.lists = JSON.parse(lists)
if (tasks) initState.tasks = JSON.parse(tasks);
if (total) initState.total = JSON.parse(total);

/**
 * Handles all the dispatched actions
 * @param {Object} state
 * @param {Object} action
 */
const rootReducer = (state = initState, action) => {
  // add a new board
  if (action.type === 'ADD_BOARD') {
    return addBoardReducer(state, action);
  } else if (action.type === 'ADD_LIST') {
    // add a new list
    return addListReducer(state, action);
  } else if (action.type === 'ADD_TASK') {
    // add a new task
    return addTaskReducer(state, action);
  } else if (action.type === 'TOGGLE_TASK') {
    // toggle a given task's completed status
    return toggleTaskReducer(state, action);
  }
  // default case
  return state;
};

export default rootReducer;