import React from "react";

const TodoItem = ({ id, task, completed, onToggle }) => {
  return (
    <div
      onClick={() => {
        onToggle(id);
      }}
    >
      <input type="checkbox" checked={completed} onChange={() => {}} />
      {task}
    </div>
  );
};
export default TodoItem;
