import { useContext } from 'react'
import css from './UserModal.module.css'
import UserCard from "./UserCard.jsx"
import FieldText from "../../components/FieldText.jsx";
import ButtonPrimary from "../../components/ButtonPrimary.jsx"
import ModalBox from "../../components/ModalBox.jsx"
import { UserContext } from '../../context/user/userProvider';

function UserModal({ showModal, toggleModal }) {
  const { dataList } = useContext(UserContext);
  const users = dataList.LIST

  return (
    <>{
      (showModal) ?
        <ModalBox>
          <div className={css.Container}>
            <header>
              <FieldText description="Search user"/>
            </header>
            <ul>
              {users.map(el => (
                <UserCard key={el.id}
                  username={el.firstName}
                  phone={el.phone}
                  image={el.image}
                />
              ))}
            </ul>
            <footer>
              <ButtonPrimary text="Close" handleClick={ toggleModal }/>
            </footer>
          </div>
        </ModalBox>
        :
        null
    }</>
  )
}

export default UserModal
