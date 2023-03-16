import { Component } from "react";
import styled from "styled-components";

const FlexDiv = styled("div")`
  display: flex;
  gap: 200px;
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

class FormValidation extends Component {
  state = {
    FirstName: "",
    LastName: "",
    UserName: "",
    Password: "",
    Confirm: "",
    FirstNameErr: false,
    LastNameErr: false,
    UserNameErr: false,
    PasswordErr: false,
    ConfirmErr: false,
  };
  obj = {
    FirstName: "Enter Firstname",
    LastName: "Enter lastname",
    UserName: "Enter Username",
    Password: "Enter Password",
    Confirm: "Confirm Password",
  };

  PrintError = () => {
    const { FirstName, LastName, UserName, Password, Confirm } = this.state;
    const errors = {
      FirstNameErr: false,
      LastNameErr: false,
      UserNameErr: false,
      PasswordErr: false,
      ConfirmErr: false,
    };
    if (FirstName === "") {
      console.log(this.obj.FirstName);
      errors.FirstNameErr = true;
    }
    if (LastName === "") {
      console.log(this.obj.LastName);
      errors.LastNameErr = true;
    }
    if (UserName === "") {
      console.log(this.obj.UserName);
      errors.UserNameErr = true;
    }
    if (Password === "") {
      console.log(this.obj.Password);
      errors.PasswordErr = true;
    }
    if (Confirm === "") {
      console.log(this.obj.Confirm);
      errors.ConfirmErr = true;
    }
    this.setState({ ...errors });
  };
  CheckField = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const {
      FirstName,
      LastName,
      UserName,
      Password,
      Confirm,
      FirstNameErr,
      LastNameErr,
      UserNameErr,
      PasswordErr,
      ConfirmErr,
    } = this.state;

    return (
      <>
        <Container>
          <FlexDiv>
            <div className="first-name">
              <div className="input-box">
                <input
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                  value={FirstName}
                  onChange={this.CheckField}
                />
              </div>
              {FirstNameErr && <div className="error">Enter firstname</div>}
            </div>
            <div className="last-name">
              <div className="input-box">
                <input
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={this.CheckField}
                />
              </div>
              {LastNameErr && <div className="error">Enter firstname</div>}
            </div>
          </FlexDiv>
          <div className="UserName">
            <input
              type="email"
              name="UserName"
              placeholder="Username"
              className="UserInput"
              value={UserName}
              onChange={this.CheckField}
            />
          </div>
          <FlexDiv>
            <div className="">
              <div className="input-box">
                <input
                  type="Password"
                  name="Password"
                  placeholder="Password"
                  value={Password}
                  onChange={this.CheckField}
                />
              </div>
              {PasswordErr && <div className="error">Enter firstname</div>}
            </div>
            <div className="">
              <div className="input-box">
                <input
                  type="Password"
                  name="Confirm"
                  placeholder="Confirm"
                  value={Confirm}
                  onChange={this.CheckField}
                />
              </div>
              {ConfirmErr && <div className="error">Enter firstname</div>}
            </div>
          </FlexDiv>

          <div>
            <button onClick={this.PrintError}>Submit</button>
          </div>
        </Container>
      </>
    );
  }
}
export default FormValidation;