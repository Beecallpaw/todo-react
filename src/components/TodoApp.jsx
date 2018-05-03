import React from "react";

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";
const uid = require("uuid/v4");

class TodoApp extends React.Component {
  state = {
    showCompleted: false,
    searchText: "",
    todos: [
      {
        id: uid(),
        task: "Eat food"
      },
      {
        id: uid(),
        task: "Read Something"
      },
      {
        id: uid(),
        task: "Kill anything that moves"
      }
    ]
  };
  handleAddTodo = item =>{
    console.log(item);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uid(),
          task: item
        }
      ]
    });
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
