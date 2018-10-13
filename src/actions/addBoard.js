/**
 * Action creator for adding a new board
 * @param {String} name
 */
function addBoardAction(name) {
  return {
    type: 'ADD_BOARD',
    name: name,
  }
};

export default addBoardAction;