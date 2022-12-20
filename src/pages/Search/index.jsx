import { useState } from "react";
import TodoProvider from "../../components/TodoProvider";
import TodoSearch from "../../components/TodoSearch";
import TodoView from "../../components/TodoView";
import { useStorageValue } from "../../hooks/useStorageContext";

const SearchData = () => {
  const data = useStorageValue();

  const [searchedData, setData] = useState(data);

  return (
    <>
      <TodoSearch setData={setData} />
      <TodoView data={searchedData} />
    </>
  );
};

const Search = () => {
  return (
    <TodoProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SearchData />
      </div>
    </TodoProvider>
  );
};

export default Search;
