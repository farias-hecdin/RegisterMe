import css from "./ParticipantProfile.module.css";
import ButtonPrimary from "../../components/ButtonPrimary.jsx"

function ParticipantProfile({styled, pFirstName, pLastName, pAge, pPhone, pEmail, pPassword, pImage, showParticipant}) {
  return (
    <div className={css.Container} style={styled}>
      <figure className={css.Container_image}>
        <img src={pImage} alt={`${pFirstName} ${pLastName}`}/>
      </figure>
      <ul className={css.Container_list}>
        <li>
          <span>First name:</span> {pFirstName}
        </li>
        <li>
          <span>Last name:</span> {pLastName}
        </li>
        <li>
          <span>Age:</span> {pAge}
        </li>
        <li>
          <span>Phone:</span> {pPhone}
        </li>
        <li>
          <span>Email:</span> {pEmail}
        </li>
        <li>
          <span>Password:</span> {pPassword}
        </li>
      </ul>
      <div className={css.Container_footer}>
        <ButtonPrimary
          pType="button"
          pText="Next"
          handleClick={showParticipant}
          variant="primary"
        />
      </div>
    </div>
  );
}

export default ParticipantProfile;
