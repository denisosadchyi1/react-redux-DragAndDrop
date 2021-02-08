import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./add.module.scss";
import { addNew } from "../../redux/actions";

const AddForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos)
  const [text, setText] = useState("");

  const createNew = () => {
    if (!text) {
      alert("Enter some text");
    } else {
      const newTodo = {
        id: Math.random() + Date.now(),
        title: text,
      };
      const newTmp = todos.map((todo) => {
        if (todo.title === "Новые") {
          todo.items.push(newTodo);
        }
        return todo;
      });
      dispatch(addNew(newTmp));
    }
  };

  const onKeyAdd = (key) => {
    if (key === "Enter") {
      if (!text) {
        alert("Enter some text");
      } else {
        const newTodo = {
          id: Math.random() + Date.now(),
          title: text,
        };
        const newTmp = todos.map((todo) => {
          if (todo.title === "Новые") {
            todo.items.push(newTodo);
          }
          return todo;
        });
        dispatch(addNew(newTmp));
      }
    }
  };

  return (
    <div className={s.formWrapper}>
      <input
        type="text"
        className={s.addInput}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={(e) => onKeyAdd(e.key)}
      />
      <button
        className={`btn btn-primary ${s.addButton}`}
        onClick={() => createNew()}
      >
        Add New
      </button>
    </div>
  );
};

export default AddForm;
