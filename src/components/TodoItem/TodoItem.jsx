import { useState } from "react";
import { useDependencyFn } from "../../hooks/useDependencyContext";
import Repo from "../../lib/todo";
import Style from "./todoItem.module.css";
/**
 *
 * @param {{ todo: import("../../types/todo").Todo}} props
 */
const TodoItem = ({ todo }) => {
  const [open, setOpen] = useState(false); // 상세보기
  const update = useDependencyFn();

  const handleOpen = () => setOpen((prev) => !prev); // toggle

  const handleRemove = () => {
    Repo.del(todo.id).finally(update);
  };

  return (
    <div className={Style.root}>
      <div className={Style.preview}>
        <div className={Style.title}>{todo.title}</div>
        <button onClick={handleOpen}>열기</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
      {open && <div></div>}
    </div>
  );
};

export default TodoItem;
