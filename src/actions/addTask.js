/**
 * Action creator for adding a new task
 * @param {Number} boardId
 * @param {Number} listId
 * @param {String} name
 */
function addTaskAction(boardId, listId, name) {
  return {
    type: 'ADD_TASK',
    boardId: boardId,
    listId: listId,
    name: name
  };
}

export default addTaskAction;