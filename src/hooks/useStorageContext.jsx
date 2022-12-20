import { createContext, useContext } from "react";

const StorageContext = createContext();

function useStorageValue() {
  return useStorageState()[0];
}

function useStorageSetter() {
  return useStorageState()[1];
}

function useStorageState() {
  const state = useContext(StorageContext);

  if (!state) throw Error("Error");

  return state;
}

export { StorageContext, useStorageSetter, useStorageState, useStorageValue };
