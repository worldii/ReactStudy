import React from "react";
import "./TodoListItem.scss";
const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <div className="check">&</div>
        <div className="text">Things To Do</div>
      </div>
      <div className="remove">-</div>
    </div>
  );
};

export default TodoListItem;
