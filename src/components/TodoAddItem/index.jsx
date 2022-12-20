import { useState } from "react";
import { useDependencyFn } from "../../hooks/useDependencyContext";
import Style from "./todoAddItem.module.css";
import useInput from "../../hooks/useInput";
import Repo from "../../lib/todo";
import make from "../../types/todo";
import captureEnter from "../../lib/captureEnter";
import importantColorSet from "../../lib/importantColorSet";

const TodoAddItem = () => {
  const update = useDependencyFn();

  const [important, setImportant] = useState("normal");
  const [title, handleTitle, clear] = useInput();

  const handleCreate = () => {
    if (!title || title.trim().length === 0) return;

    const item = make({ title, important });
    Repo.create(item).finally(update);
    clear();
  };

  const handleImportantChanged = (e) => {
    setImportant(e.target.value);
  };

  return (
    <div className={Style.root}>
      <select
        className={Style.select}
        style={{ backgroundColor: importantColorSet[important] }}
        onChange={handleImportantChanged}
        value={important}
      >
        <option value="normal">NORM</option>
        <option value="special">SPEC</option>
        <option value="warning">WARN</option>
      </select>
      <input
        className={Style.input}
        type="text"
        placeholder="할 일 입력"
        value={title}
        onChange={handleTitle}
        onKeyPress={captureEnter(handleCreate)}
      />
      <button className={Style.button} onClick={handleCreate}>
        추가
      </button>
    </div>
  );
};

export default TodoAddItem;
