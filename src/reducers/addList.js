/**
 * Reducer to add a new list to a board
 * @param {Object} state
 * @param {Object} action
 */
function addListReducer(state, action) {
  let newBoards = [...state.boards];
  let newLists = [...state.lists];
  let totalLists;

  // find the board with the given id and update its lists' count
  for (let i = 0; i < newBoards.length; i++) {
    if (newBoards[i].id === action.boardId) {
      totalLists = ++newBoards[i].totalLists;
      break;
    }
  }

  // add the new list
  newLists.push({
    boardId: action.boardId,
    id: totalLists,
    name: action.name,
    totalTasks: 0,
  });

  // save data to local storage
  localStorage.setItem('boards', JSON.stringify(newBoards));
  localStorage.setItem('lists', JSON.stringify(newLists));

  return {
    ...state,
    boards: newBoards,
    lists: newLists,
  };
}

export default addListReducer;