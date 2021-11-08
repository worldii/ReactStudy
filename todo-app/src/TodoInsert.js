import React from "react";
import "./TodoInsert.scss";
const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할일을 입력하세요" type="text" />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoInsert;
