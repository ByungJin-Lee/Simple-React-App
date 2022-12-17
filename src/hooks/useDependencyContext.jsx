import { createContext, useContext } from "react";

const DependencyContext = createContext();

function useDependencyValue() {
  return useDependencyState()[0];
}

function useDependencyFn() {
  return useDependencyState()[1];
}

function useDependencyState() {
  const state = useContext(DependencyContext);

  if (!state) throw Error("가까운 Dependency Provider가 없습니다.");

  return state;
}

export {
  DependencyContext,
  useDependencyFn,
  useDependencyState,
  useDependencyValue,
};
