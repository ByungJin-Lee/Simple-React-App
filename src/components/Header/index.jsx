import { Link } from "react-router-dom";
import Style from "./header.module.css";

const Header = () => {
  return (
    <header className={Style.root}>
      <Link to="/" className={Style.content}>
        Todo
      </Link>
      <hr />
    </header>
  );
};

export default Header;
