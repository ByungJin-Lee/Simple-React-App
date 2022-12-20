import Style from "./todoAddItem.module.css";
import useInput from "../../hooks/useInput";
import captureEnter from "../../lib/captureEnter";
import { useStorageValue } from "../../hooks/useStorageContext";

const TodoSearch = ({ setData }) => {
  const storageValue = useStorageValue();

  const [title, handleTitle, clear] = useInput();

  const handleSearch = () => {
    setData(storageValue.filter((v) => v.title.includes(title)));

    clear();
  };

  return (
    <div className={Style.root}>
      <input
        className={Style.input}
        type="text"
        placeholder="검색어 입력"
        value={title}
        onChange={handleTitle}
        onKeyPress={captureEnter(handleSearch)}
      />
      <button className={Style.button} onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default TodoSearch;
