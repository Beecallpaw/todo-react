import React from "react";

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component {
  state = {
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
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <TodoList todos={this.state.todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
