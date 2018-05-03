import React from "react";

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";

class TodoApp extends React.Component {
  state = {
    showCompleted: false,
    searchText: "",
    todos: [
      {
        id: 1,
        task: "Eat food"
      },
      {
        id: 2,
        task: "Read Something"
      },
      {
        id: 3,
        task: "Kill anything that moves"
      }
    ]
  };
  handleAddTodo(item) {
    console.log(`new todo: ${item}`);
  }
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
        <TodoList todos={this.state.todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
