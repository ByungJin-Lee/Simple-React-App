import { useDependencyFn } from "../../hooks/useDependencyContext";
import Repo from "../../lib/todo";
import Style from "./todoItem.module.css";
import importantColorSet from "../../lib/importantColorSet";
import formatter from "../../lib/formatter";
import useToggle from "../../hooks/useToggle";

/**
 *
 * @param {{ todo: import("../../types/todo").Todo}} props
 */
const TodoItem = ({ todo }) => {
  const [open, handleOpen] = useToggle(false); // 상세보기
  const update = useDependencyFn();

  const handleRemove = () => {
    Repo.del(todo.id).finally(update);
  };

  const handleSolved = () => {
    Repo.update(todo.id, { solved: !todo.solved }).then(update);
  };

  return (
    <div className={Style.root}>
      <div className={Style.preview}>
        <div
          className={Style.important}
          style={{ backgroundColor: importantColorSet[todo.important] }}
        >
          I
        </div>
        <div className={Style.title} title={todo.title}>
          {todo.title}
        </div>
        <button onClick={handleSolved}>
          {!todo.solved ? "해결" : "미해결"}
        </button>
        &nbsp;
        <button onClick={handleOpen}>{!open ? "열기" : "닫기"}</button>
        &nbsp;
        <button onClick={handleRemove}>삭제</button>
      </div>
      {open && (
        <div className={Style.inner}>
          <div className={Style.date_content}>
            <span>등록일 {formatter.shortDate(todo.createdAt)}</span>
            <span>수정일 {formatter.shortDate(todo.updatedAt)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
