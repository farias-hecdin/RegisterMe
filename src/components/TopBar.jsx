import css from "./TopBar.module.css";

function TopBar({ title }) {
  return (
    <header className={css.Header}>
      <div className={css.Header__wrap}>
        <h1 className={css.Logo}>{title}</h1>
      </div>
    </header>
  );
};

export default TopBar
