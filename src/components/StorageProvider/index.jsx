import { useState } from "react";
import { StorageContext } from "../../hooks/useStorageContext";

const StorageProvider = ({ children }) => {
  const storageState = useState([]);

  return (
    <StorageContext.Provider value={storageState}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
