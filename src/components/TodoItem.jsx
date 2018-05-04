import React from "react";
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
