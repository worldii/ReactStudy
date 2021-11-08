import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import React, { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초",
      checked: true,
    },
    {
      id: 2,
      text: "리액트의 기초1",
      checked: false,
    },
    {
      id: 3,
      text: "리액트의 기초2",
      checked: true,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList todo={todos}></TodoList>
    </TodoTemplate>
  );
};

export default App;
