import css from "./TopBar.module.css";

function TopBar({ pTitle }) {
  return (
    <header className={css.Header}>
      <div className={css.Header_wrap}>
        <h1 className={css.Logo}>{pTitle}</h1>
      </div>
    </header>
  );
}

export default TopBar;
