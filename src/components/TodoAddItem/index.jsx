import { useState } from "react";
import { useDependencyFn } from "../../hooks/useDependencyContext";
import Style from "./todoAddItem.module.css";
import useInput from "../../hooks/useInput";
import Repo from "../../lib/todo";
import make from "../../types/todo";
import captureEnter from "../../lib/captureEnter";

const TodoAddItem = () => {
  const update = useDependencyFn();

  const [important, setImportant] = useState("normal");
  const [title, handleTitle, clear] = useInput();
  const [category, setCategory] = useState("");

  const handleCreate = () => {
    const item = make({ title, category, important });
    clear();
    Repo.create(item).finally(update);
  };

  return (
    <div className={Style.root}>
      <input
        className={Style.input}
        type="text"
        placeholder="할 일 입력"
        value={title}
        onChange={handleTitle}
        onKeyDown={captureEnter(handleCreate)}
      />
      <button className={Style.button} onClick={handleCreate}>
        추가
      </button>
    </div>
  );
};

export default TodoAddItem;
