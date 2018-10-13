/**
 * Reducer to add a new board
 * @param {Object} state
 * @param {Object} action
 */
function addBoardReducer(state, action) {
  let id = state.total + 1;
  let boards = [...state.boards, { id: id, title: action.name, totalLists: 0 }];

  // save data to local storage
  localStorage.setItem('boards', JSON.stringify(boards));
  localStorage.setItem('total', JSON.stringify(id));

  return {
    ...state,
    boards: boards,
    total: id,
  };
}

export default addBoardReducer;