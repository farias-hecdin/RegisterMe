import css from './FieldRadio.module.css'

function FieldRadio({pIdname, pValue, pText, handleChange}) {
  return (
    <label className={css.Radio} name={pIdname}>
      <input type="radio"
        className={css.Radio_input}
        checked={pValue}
        id={pIdname}
        name={pIdname}
        onChange={handleChange}
        value={pValue}
      />
      <span>{pText}</span>
    </label>
  )
}

export default FieldRadio
