import css from "./ButtonPrimary.module.css";

function ButtonPrimary({handleClick, pText, pType, styled, variant}) {
  return (
    <button
      className={css.Button}
      style={styled}
      data-variant={variant}
      type={pType}
      onClick={handleClick}
    >
      {pText}
    </button>
  );
}

export default ButtonPrimary;
