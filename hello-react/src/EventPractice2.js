import React, { useState } from "react";

const EventPractice2 = () => {
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onChange();
    }
  };
  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="test"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice2;
