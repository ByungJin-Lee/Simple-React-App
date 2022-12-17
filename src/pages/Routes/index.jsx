import { Route, Routes } from "react-router-dom";
import TodoPage from "../TodoPage";

const RoutedContent = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
    </Routes>
  );
};

export default RoutedContent;
