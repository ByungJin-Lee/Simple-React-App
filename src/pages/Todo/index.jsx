import TodoProvider from "../../components/TodoProvider";
import TodoAddItem from "../../components/TodoAddItem";
import TodoSolvedView from "../../components/TodoSolvedView";
import TodoUnSolvedView from "../../components/TodoUnSolvedView";
import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <TodoProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TodoAddItem />
        <Link to="/search">검색</Link>
        <div>
          <TodoSolvedView />
          <TodoUnSolvedView />
        </div>
      </div>
    </TodoProvider>
  );
};

export default Todo;
