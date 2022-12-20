import { Route, Routes } from "react-router-dom";
import Todo from "../Todo";
import Search from "../Search";

const RoutedContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default RoutedContent;
