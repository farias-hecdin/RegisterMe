import css from "./UserCard.module.css"

function UserCard({ handleClick, image, username, phone }) {
  return (
    <div className={css.Card} onClick={handleClick}>
      <img className={css.Card__image} src={image} alt={username} />
      <div className={css.Card__wrap}>
        <span className={css.Card__name}>{username}</span>
        <span className={css.Card__phone}>{phone}</span>
      </div>
    </div>
  )
}

export default UserCard
