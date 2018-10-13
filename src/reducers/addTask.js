/**
 * Reducer to add a new task to a list
 * @param {Object} state
 * @param {Object} action
 */
function addTaskReducer(state, action) {
  let newLists = [...state.lists];
  let newTasks = [...state.tasks];
  let totalTasks;

  // find the list with the given id and update its total task count
  for (let i = 0; i < newLists.length; i++) {
    if (newLists[i].boardId === action.boardId && newLists[i].id === action.listId) {
      totalTasks = ++newLists[i].totalTasks;
      break;
    }
  }

  // add task
  newTasks.push({
    boardId: action.boardId,
    listId: action.listId,
    id: totalTasks,
    name: action.name,
  });

  // save data to local storage
  localStorage.setItem('lists', JSON.stringify(newLists));
  localStorage.setItem('tasks', JSON.stringify(newTasks));

  return {
    ...state,
    lists: newLists,
    tasks: newTasks,
  }
}

export default addTaskReducer;