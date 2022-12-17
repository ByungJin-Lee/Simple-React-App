import { DependencyContext } from "../../hooks/useDependencyContext";
import useUpdate from "../../hooks/useUpdate";

const DependencyProvider = ({ children }) => {
  const dependencyState = useUpdate();

  return (
    <DependencyContext.Provider value={dependencyState}>
      {children}
    </DependencyContext.Provider>
  );
};

export default DependencyProvider;
