import css from "./ModalBox.module.css";

function ModalBox({ children }) {
  return (
    <aside className={css.LightBox}>
      <div className={css.LightBox_wrap}>{children}</div>
    </aside>
  );
}

export default ModalBox;
