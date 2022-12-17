import Style from "./header.module.css";

const Header = () => {
  return (
    <header className={Style.root}>
      <div className={Style.content}>Todo</div>
      <hr />
    </header>
  );
};

export default Header;
