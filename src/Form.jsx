import { Component } from "react";
import './form.css'

class LogIn extends Component {
  state = {
    name: "",
    email: "",
    pass: "",
    textArea: "",
    rangeInput: "",
    myDate: "",
    choosenRadio: "",
    dropDown: "",
    checkBox1: "",
    checkBox2: "",
  };

  _handleInputChange = (e) => {
    const { value, name } = e.target;
    if (!name) {
      return;
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      name, pass,textArea,rangeInput,myDate,choosenRadio,dropDown,checkBox1,checkBox2,
    } = this.state;
    return (
      <>
        <div className="main">
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            value={name}
            name="name"
            onChange={this._handleInputChange}
          />
        </div>

        <div className="main">
          <label htmlFor="pass">Pass</label>
          <input
            type="password"
            value={pass}
            name="pass"
            onChange={this._handleInputChange}
          />
        </div>
        <div className="main">
          <label htmlFor="TextArea">TextArea</label>
          <textarea
            name={"textArea"}
            rows={"4"}
            cols={"50"}
            value={textArea}
            onChange={this._handleInputChange}
          ></textarea>
        </div>
        <div className="main">
          <label htmlFor="Range">Range</label>
          <input
            type={"range"}
            name={"rangeInput"}
            value={rangeInput}
            onChange={this._handleInputChange}
          />
        </div>
        <div className="main">
          <label htmlFor="Date">Choose Date</label>
          <input
            type={"date"}
            name={"myDate"}
            value={myDate}
            onChange={this._handleInputChange}
          />
        </div>
        <div className="main">
          <label htmlFor="gender">Gender</label>
          <br />
          <label htmlFor="Male">Male</label>
          <input
            type={"radio"}
            name={"choosenRadio"}
            value={"Male"}
            onChange={this._handleInputChange}
          />
          <label htmlFor="Female">Female</label>
          <input
            type={"radio"}
            name={"choosenRadio"}
            value={"Female"}
            onChange={this._handleInputChange}
          />
        </div>
        <div className="main">
          <select name={"dropDown"} onChange={this._handleInputChange}>
            <option value={"First"}>First</option>
            <option value={"Second"} selected>
              Second
            </option>
          </select>
        </div>
        <div className="main">
          <label htmlFor="milk">Milk</label>
          <input
            type={"checkbox"}
            name={"checkBox1"}
            value={"milk"}
            onChange={this._handleInputChange}
          />
          <label htmlFor="sugar">Sugar</label>
          <input
            type={"checkbox"}
            name={"checkBox2"}
            value={"sugar"}
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <p className="para"> Name:{name}</p>
          <p className="para">Text-Area:{textArea}</p>
          <p className="para">Pass:{pass}</p>
          <p className="para">Range Value is:{rangeInput}</p>
          <p className="para">Choosen Date:{myDate}</p>
          <p className="para">Gender:{choosenRadio}</p>
          <p className="para">Drowdown-Result:{dropDown}</p>
          <p className="para">
            CheckBox Data:{checkBox1},{checkBox2}
          </p>
        </div>
      </>
    );
  }
}
export default LogIn;

