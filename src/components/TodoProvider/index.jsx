import { useEffect } from "react";
import { useDependencyValue } from "../../hooks/useDependencyContext";
import usePending from "../../hooks/usePending";
import { useStorageState } from "../../hooks/useStorageContext";
import Repo from "../../lib/todo";
import Loading from "../Loading";

// json-server로 부터 todo list를 가져옴.
const fetch = () => Repo.read();

const TodoProvider = ({ children }) => {
  const dependency = useDependencyValue();
  const [storageValue, setStorageValue] = useStorageState();

  const { data, pending } = usePending(fetch, dependency);

  useEffect(() => {
    setStorageValue(data);
  }, [data]);

  if (pending || !storageValue) return <Loading />;

  return <>{children}</>;
};

export default TodoProvider;
