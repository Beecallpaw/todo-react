import React from "react";

import uid from "uuid/v4";

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";
import ls from "../LocalStorage/LS";
class TodoApp extends React.Component {
  state = {
    showCompleted: false,
    searchText: "",
    todos: ls.getTodos()
  };

  componentDidUpdate() {
    ls.setTodos(this.state.todos);
  }

  handleAddTodo = item => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uid(),
          task: item,
          completed: false
        }
      ]
    });
  };
  handleToggle = id => {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      if (todo.completed) {
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  };
  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <SearchTodo onSearch={this.handleSearch} />
        <TodoList onToggle={this.handleToggle} todos={this.state.todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
