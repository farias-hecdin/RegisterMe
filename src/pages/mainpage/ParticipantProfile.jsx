import css from './ParticipantProfile.module.css'

function ParticipantProfile({ firstName, lastName, phone, password, image }) {
  return (
    <div className={css.Container}>
      <figure className={css.Container__image}>
        <img src={image} alt={firstName + lastName}/>
      </figure>
      <ul className={css.Container__list}>
        <li><span>First name</span>{firstName}</li>
        <li><span>Last name</span>{lastName}</li>
        <li><span>Phone</span>{phone}</li>
        <li><span>Password</span>{password}</li>
      </ul>
    </div>
  )
}

export default ParticipantProfile
