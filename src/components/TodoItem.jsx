import React from "react";

const TodoItem = ({ id, task }) => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li>
          {id}.{task}
        </li>
      </ul>
    </div>
  );
};
export default TodoItem;
