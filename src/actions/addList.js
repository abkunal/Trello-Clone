/**
 * Action creator for adding a new list
 * @param {Number} boardId
 * @param {String} name
 */
function addListAction(boardId, name) {
  return {
    type: 'ADD_LIST',
    name: name,
    boardId: boardId,
  };
}

export default addListAction;