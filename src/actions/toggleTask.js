/**
 * Action creator for toggling the completed status of a task
 * @param {Number} boardId
 * @param {Number} listId
 * @param {Number} taskId
 */
function toggleTaskAction(boardId, listId, taskId) {
  return {
    type: 'TOGGLE_TASK',
    boardId,
    listId,
    taskId,
  };
}

export default toggleTaskAction;