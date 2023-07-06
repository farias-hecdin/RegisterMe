import { useState, useContext } from "react";
import css from "./MainLayout.module.css";
import TopBar from "../../components/TopBar.jsx";
import ParticipantProfile from "./ParticipantProfile.jsx";
import RegisterForm from "./RegisterForm.jsx";
import UserModal from "./UserModal.jsx";
import { UserContext } from "../../context/user/userProvider.jsx";

function App() {
  const { users } = useContext(UserContext);

  // Create an array state to store the participant form data -----------------
  const [participant, setParticipant] = useState([])

  function fnAddParticipant(data) {
    setParticipant([...participant, data])
  }

  // Show or hide modal component ---------------------------------------------
  const [activeModal, setActiveModal] = useState(false);

  function fnToggleModal() {
    setActiveModal(!activeModal);
  }

  // Show the next participant profile ----------------------------------------
  const [showParticipant, setShowParticipant] = useState(0);

  function fnShowParticipant() {
    let state = showParticipant;
    if (state < users.length - 1) {
      setShowParticipant(state + 1)
    } else {
      setShowParticipant(0);
      alert("Great! We just received the last participant. 👍 \nLet's get started again!")
    }
  }

  return (
    <section className={css.Frame}>
      <aside className={css.Frame_shape}></aside>
      <TopBar
        pTitle="Register me, please"
      />
      <main className={css.Container}>
        <div className={css.Container_wrap}>
          <h2 className={css.Container_title}>Form</h2>
          <RegisterForm
            toggleModal={fnToggleModal}
            handleSubmit={fnAddParticipant}
          />
        </div>
        <div className={css.Container_wrap}>
          <h2 className={css.Container_title}>Participant</h2>
          <ParticipantProfile
            pFirstName={users[showParticipant].firstName}
            pLastName={users[showParticipant].lastName}
            pAge={users[showParticipant].age}
            pEmail={users[showParticipant].email}
            pImage={users[showParticipant].image}
            pPassword={users[showParticipant].password}
            pPhone={users[showParticipant].phone}
            showParticipant={fnShowParticipant}
          />
        </div>
        <UserModal
          isActiveModal={activeModal}
          dataParticipant={participant}
          toggleModal={fnToggleModal}
        />
      </main>
    </section>
  );
}

export default App;
