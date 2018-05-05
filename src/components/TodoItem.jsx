import React from "react";
import "../styles/styles.css";
require("moment");

const TodoItem = ({
  id,
  task,
  completed,
  onToggle,
  createdAt,
  completedAt
}) => {
  const addDate = () => {
    let message = "Created";
    let time = createdAt;
    if (completed) {
      message = "Completed";
      time = completedAt;
    }

    return `${message} ${time}`;
  };
  return (
    <div
      id="todos"
      onClick={() => {
        onToggle(id);
      }}
    >
      <input type="checkbox" checked={completed} onChange={() => {}} />
      {task}
      <br />
      {addDate()}
    </div>
  );
};
export default TodoItem;
