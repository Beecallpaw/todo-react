module.exports = {
  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });
    filteredTodos = filteredTodos.filter(todo => {
      let text = todo.task.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    filteredTodos.sort((a, b) => {
      return !a.completed && b.completed ? -1 : 1;
    });
    return filteredTodos;
  }
};
