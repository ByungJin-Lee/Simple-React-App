import Style from "./todoView.module.css";

import usePending from "../../hooks/usePending";
import Repo from "../../lib/todo";
import Loading from "../Loading";
import TodoItem from "../TodoItem/TodoItem";
import { useDependencyValue } from "../../hooks/useDependencyContext";

// json-server로 부터 todo list를 가져옴.
const fetch = () => Repo.read();

const TodoView = () => {
  const dependency = useDependencyValue();
  const { data, pending } = usePending(fetch, dependency);

  if (pending) return <Loading />;

  return (
    <div className={Style.root}>
      {Array.isArray(data) &&
        data.map((item) => <TodoItem key={item.id} todo={item} />)}
    </div>
  );
};

export default TodoView;
