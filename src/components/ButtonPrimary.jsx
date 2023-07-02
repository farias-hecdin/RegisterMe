import css from "./ButtonPrimary.module.css"

function ButtonPrimary({ text, styled, handleClick }) {
  return (
  <button className={css.Button} data-css={styled} onClick={handleClick}>
      {text}
  </button>
  )
}

export default ButtonPrimary
