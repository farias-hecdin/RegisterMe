import { useContext, useState } from "react";
import css from "./UserModal.module.css";
import ButtonPrimary from "../../components/ButtonPrimary.jsx";
import ModalBox from "../../components/ModalBox.jsx";
import UserCard from "./UserCard.jsx";
import FieldRadio from "../../components/FieldRadio.jsx"
import { UserContext } from "../../context/user/userProvider";

function UserModal({ isActiveModal, toggleModal, dataParticipant }) {
  const { users } = useContext(UserContext);

  // Participants window ------------------------------------------------------
  const [activeTab, setActiveTab] = useState("new")

  const tabNewUsers = () => {
    setActiveTab("new");
  };
  const tabPrevUsers= () => {
    setActiveTab('prev');
  };

  return (
    <>
      {(isActiveModal) ? 
        <ModalBox>
          <div className={css.Container}>
            <header className={css.Container_header}>
              <h2 className={css.Container_title}>Registered participants</h2>
            </header>
            <div className={css.Container_radio}>
              <FieldRadio
                pText="New"
                pIdname="usertab"
                pValue={activeTab === 'new'}
                handleChange={tabNewUsers}
              />
              <FieldRadio
                pText="Prev"
                pIdname="usertab"
                pValue={activeTab === "prev"}
                handleChange={tabPrevUsers}
              />
            </div>
            <div className={css.Container_list}>
              {(activeTab === "new") ?
                <ul>
                  {dataParticipant.map(elem => (
                    <UserCard
                      key={crypto.randomUUID()}
                      pUsername={elem.firstName}
                      pPhone={elem.phone}
                      pImage={elem.image}
                    />
                  ))}
                </ul>
                :
                <ul>
                  {users.map(elem => (
                    <UserCard
                      key={elem.id}
                      pUsername={elem.firstName}
                      pPhone={elem.phone}
                      pImage={elem.image}
                    />
                  ))}
                </ul>
              }
            </div>
            <footer>
              <ButtonPrimary
                pText="Close"
                handleClick={toggleModal}
                variant="primary"
              />
            </footer>
          </div>
        </ModalBox>
       : null}
    </>
  );
}

export default UserModal;
