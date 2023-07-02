import css from './FieldText.module.css'

function FieldText({ keyword, description }) {
  return (
    <p className={css.FieldText}>
      <input
        type="text"
        id={keyword}
        placeholder=" "
        autocomplete="off"
        className={css.FieldText__input}
      />
      <label className={css.FieldText__label} htmlFor={keyword}>
        {description}
      </label>
    </p>
  )
}

export default FieldText
