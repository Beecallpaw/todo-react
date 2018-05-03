import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem onToggle={onToggle} key={todo.id} {...todo} />
      ))}
    </div>
  );
};
export default TodoList;
