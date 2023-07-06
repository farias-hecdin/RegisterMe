import css from "./RegisterForm.module.css";
import images from "../../assets/lorem-image.jpg"
import ButtonPrimary from "../../components/ButtonPrimary.jsx";
import FieldText from "../../components/FieldText.jsx";
import { useState } from "react";

function RegisterForm({ styled, handleSubmit, toggleModal }) {
  const [formInfo, setFormInfo] = useState({
    firstName: null,
    lastName: null,
    image: images,
    age: null,
    phone: null,
    email: null,
    password: null,
  });

  // Update stateVar "formInfo"
  function fnHandleChange(event) {
    let objectFormInfo = {
      ...formInfo,
      [event.target.name]: event.target.value,
    };
    setFormInfo(objectFormInfo);
  }

  // Send information
  function fnSubmitForm(event) {
    // Disable the default behavior
    event.preventDefault();
    // Pass datas to prop "handleSubmit"
    handleSubmit(formInfo);

    setFormInfo({
      firstName: null,
      lastName: null,
      age: null,
      image: images,
      phone: null,
      email: null,
      password: null,
    });
    // event.target.reset();
  }

  return (
    <div className={css.Container} style={styled}>
      <p className={css.Container_text}>
        Complete the participants form as fast as possible and make sure to include all your information.
      </p>
      <form onSubmit={fnSubmitForm} className={css.Container_form}>
        <div className={css.Container_wrap}>
          <FieldText
            pText="First name"
            pIdfor="firstName"
            pName="firstName"
            pValue={formInfo.firstName}
            handleChange={fnHandleChange}
          />
          <FieldText
            pText="Last name"
            pIdfor="lastName"
            pName="lastName"
            pValue={formInfo.lastName}
            handleChange={fnHandleChange}
          />
        </div>
        <div className={css.Container_wrap}>
          <FieldText
            pText="Age"
            pIdfor="age"
            pName="age"
            pValue={formInfo.age}
            handleChange={fnHandleChange}
          />
          <FieldText
            pText="Phone"
            pIdfor="phone"
            pName="phone"
            pValue={formInfo.phone}
            handleChange={fnHandleChange}
          />
        </div>
        <FieldText
          pText="Email"
          pIdfor="email"
          pName="email"
          pValue={formInfo.email}
          handleChange={fnHandleChange}
        />
        <FieldText
          pText="Password"
          pIdfor="password"
          pName="password"
          pValue={formInfo.password}
          handleChange={fnHandleChange}
        />
        <div className={css.Container_footer}>
          <ButtonPrimary
            pType="submit"
            pText="Send"
            variant="primary"
          />
          <ButtonPrimary
            pType="button"
            pText="Show list"
            variant="secondary"
            handleClick={toggleModal}
          />
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
