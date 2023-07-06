import css from "./UserCard.module.css";

function UserCard({ handleClick, pImage, pUsername, pPhone }) {
  return (
    <div className={css.Card} onClick={handleClick}>
      <img className={css.Card_image} src={pImage} alt={pUsername} />
      <div className={css.Card_wrap}>
        <span className={css.Card_name}>{pUsername}</span>
        <span className={css.Card_phone}>{pPhone}</span>
      </div>
    </div>
  );
}

export default UserCard;
