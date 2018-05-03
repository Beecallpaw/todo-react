import React from "react";

import TodoList from "./TodoList";

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
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
