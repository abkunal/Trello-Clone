/**
 * Reducer to toggle a task's completed status
 * @param {Object} state
 * @param {Object} action
 */
function toggleTaskReducer(state, action) {
  let newTasks = [...state.tasks];

  // loop over the tasks to find the appropriate task and toggle its status
  for (let i = 0; i < newTasks.length; i++) {
    if (newTasks[i].boardId === action.boardId &&
      newTasks[i].listId === action.listId && newTasks[i].id === action.taskId) {
      newTasks[i] = { ...newTasks[i] };
      newTasks[i].completed = !newTasks[i].completed;
    }
  }

  // save data to local storage
  localStorage.setItem('tasks', JSON.stringify(newTasks));

  return {
    ...state,
    tasks: newTasks,
  };
}

export default toggleTaskReducer;