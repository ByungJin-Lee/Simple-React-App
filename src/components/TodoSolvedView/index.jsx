import { useStorageValue } from "../../hooks/useStorageContext";
import TodoView from "../TodoView";

const TodoSolvedView = () => {
  const storageValue = useStorageValue();

  return (
    <div>
      <h2>Solved</h2>
      <TodoView data={storageValue.filter((todo) => todo.solved)} />
    </div>
  );
};

export default TodoSolvedView;
