import logo from "./logo.svg";
import "./App.css";
import { useCallback, useRef, useState } from "react";
import produce from "immer";
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        //{ ...form, [name]: [value] }
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      setData();

      //{ ...data, array: data.array.concat(info) }
      produce(data, (draft) => {
        draft.array.push(info);
      });
    },
    [data, form.name, form.username]
  );
  const onRemove = useCallback(
    (id) => {
      setData(
        //   { ...data, array: data.array.filter((info) => info.id !== id) }
        produce(data, (draft) => {
          draft.array.splice(draft.array.findIndex((info) => info.id === id));
        })
      );
    },
    [data]
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
