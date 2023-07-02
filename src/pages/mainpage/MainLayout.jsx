import { useState, useContext } from "react"
import css from "./MainLayout.module.css";
import ButtonPrimary from "../../components/ButtonPrimary.jsx"
import FieldText from "../../components/FieldText.jsx";
import TopBar from "../../components/TopBar.jsx";
import ParticipantProfile from './ParticipantProfile.jsx';
import UserModal from "./UserModal.jsx"
import { UserContext } from '../../context/user/userProvider.jsx'

function App() {
  // hook - Context
  const { dataList } = useContext(UserContext);
  const users = dataList.LIST
  // hook - State
  const [showModal, setShowModal] = useState(false)
  // func - Open modal
  const toggleModal = () => setShowModal(!showModal)

  return (
    <section className={css.Frame}>
      <aside className={css.Frame__shape}></aside>
      <TopBar title="Register me, please"/>
      <main className={css.Container}>
        <div className={css.Container__wrap}>
          <h2 className={css.Container__title}>Form</h2>
          <div className={css.Form}>
            <FieldText description="First name" keyword="firstname"/>
            <FieldText description="Last name" keyword="lastname"/>
            <FieldText description="Email" keyword="email"/>
            <FieldText description="Password" keyword="password"/>
            <div className={css.Form__footer}>
              <ButtonPrimary text="Send"/>
              <ButtonPrimary text="Show list" styled="secondary" handleClick={toggleModal} />
            </div>
          </div>
        </div>
        { // 1.6 Paste new Context
        }
        <div className={css.Container__wrap}>
          <h2 className={css.Container__title}>Participant</h2>
          <ParticipantProfile
            firstName={users[1].firstName}
            lastName={users[1].lastName}
            phone={users[1].phone}
            password={users[1].password}
            image={users[1].image}
          />
          <UserModal showModal={showModal} toggleModal={toggleModal} />
        </div>

      </main>
    </section>
  );
}

export default App;
