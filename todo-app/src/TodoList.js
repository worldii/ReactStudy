import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos &&
        todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id}></TodoListItem>
        ))}
    </div>
  );
};

export default TodoList;
