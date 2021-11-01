import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링 완료 ");
    console.log({ name, nickname });
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <input name="name" value={name} onChange={onChangeName}></input>
      <input
        name="nickname"
        value={nickname}
        onChange={onChangeNickname}
      ></input>
      <h1>이름 {name}</h1>
      <h1>닉네임 {nickname}</h1>
    </div>
  );
};

export default Info;
