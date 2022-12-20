import { useStorageValue } from "../../hooks/useStorageContext";
import TodoView from "../TodoView";

const TodoUnSolvedView = () => {
  const storageValue = useStorageValue();

  return (
    <div>
      <h2>Unsolved</h2>
      <TodoView data={storageValue.filter((todo) => !todo.solved)} />
    </div>
  );
};

export default TodoUnSolvedView;
