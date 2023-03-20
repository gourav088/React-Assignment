import { useState } from "react";

const FormValidationFc2 = () => {
  const [profile, setProfile] = useState({
    name: "",
    lastname: "",
    state: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nameErr: false,
    lastNameErr: false,
    stateErr: false,
    emailErr: false,
    passwordErr: false,
  });

  const findError = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const printError = () => {
    const obj = {
      nameErr: false,
      lastNameErr: false,
      stateErr: false,
      emailErr: false,
      passwordErr: false,
    };

    if (profile.name === "") {
      obj.nameErr = true;
    }
    if (profile.lastname === "") {
      obj.lastNameErr = true;
    }
    if (profile.state === "") {
      obj.stateErr = true;
    }
    if (profile.email === "") {
      obj.emailErr = true;
    }
    if (profile.password === "") {
      obj.passwordErr = true;
    }

    setErrors(obj);
  };

  const { nameErr, lastNameErr, stateErr, emailErr, passwordErr } = errors;

  return (
    <>
      <input type="text" name="name" placeholder="enter your name " onChange={findError} />
      {nameErr && <div> please enter your name </div>}
      <input type="text" name="lastname" placeholder="enter last name" onChange={findError} />
      {lastNameErr && <div> please enter your lastname</div>}
      <input type="text" name="state" placeholder="enter your state" onChange={findError} />
      {stateErr && <div>enter your state first</div>}
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={findError}
      />
      {emailErr && <div>Enter email</div>}
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={findError}
      />
      {passwordErr && <div>Enter password</div>}
      <button onClick={printError}>submit</button>
    </>
  );
};

export default FormValidationFc2;
