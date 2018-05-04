module.exports = {
  setTodos(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },
  getTodos() {
    let todoString = localStorage.getItem("todos");
    let todos = [];
    try {
      todos = JSON.parse(todoString);
    } catch (error) {
      console.log(error);
    }
    return Array.isArray(todos) ? todos : [];
  }
};
