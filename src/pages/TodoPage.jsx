import DependencyProvider from "../components/DependencyProvider";
import TodoAddItem from "../components/TodoAddItem";
import TodoView from "../components/TodoView";

const TodoPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DependencyProvider>
        <TodoAddItem />
        <TodoView />
      </DependencyProvider>
    </div>
  );
};

export default TodoPage;
