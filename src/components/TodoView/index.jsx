import Style from "./todoView.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoView = ({ data }) => {
  return (
    <div className={Style.root}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => <TodoItem key={item.id} todo={item} />)
      ) : (
        <h3 style={{ textAlign: "center" }}>결과 없음</h3>
      )}
    </div>
  );
};

export default TodoView;
