import css from "./FieldText.module.css";

function FieldText({handleChange, pText, pIdfor, pName, pValue}) {
  return (
    <p className={css.FieldText}>
      <input
        autoComplete="off"
        className={css.FieldText_input}
        id={pIdfor}
        name={pName}
        onChange={handleChange}
        placeholder=" "
        type="text"
        value={pValue || ""}
      />
      <label className={css.FieldText_label} htmlFor={pIdfor}>
        {pText}
      </label>
    </p>
  );
}

export default FieldText;
