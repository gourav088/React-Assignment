import { Component } from "react";
import "./form.css";
class MyForm extends Component {
  state = {
    name: "",
    pass: "",
    textArea: "",
    rangeInput: "",
    myDate: "",
    choosenRadio: "",
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    if (!name) {
      return;
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, pass, textArea, rangeInput, myDate, choosenRadio } =
      this.state;
    return (
      <>
        <div className="main">
          <label labelfor="name">Name</label>
          <input
            type={"text"}
            value={name}
            name="name"
            onChange={this.handleInputChange}
          />
        </div>

        <div className="main">
          <label labelfor="pass">Pass</label>
          <input
            type="password"
            value={pass}
            name="pass"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="main">
          <label labelfor="TextArea">TextArea</label>
          <textarea
            name={"textArea"}
            rows={"4"}
            cols={"50"}
            value={textArea}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <div className="main">
          <label labelfor="Range">Range</label>
          <input
            type={"range"}
            name={"rangeInput"}
            value={rangeInput}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="main">
          <label labelfor="Date">Choose Date</label>
          <input
            type={"date"}
            name={"myDate"}
            value={myDate}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="main">
          <label labelfor="gender">Gender</label>
          <br />
          <label labelfor="Male">Male</label>
          <input
            type={"radio"}
            name={"choosenRadio"}
            value={"Male"}
            onChange={this.handleInputChange}
          />
          <label labelfor="Female">Female</label>
          <input
            type={"radio"}
            name={"choosenRadio"}
            value={"Female"}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <p className="para">Name:{name}</p>
          <p className="para">Pass:{pass}</p>
          <p className="para">Text-Area:{textArea}</p>
          <p className="para">Range Value is:{rangeInput}</p>
          <p className="para">Choosen Date:{myDate}</p>
          <p className="para">Gender:{choosenRadio}</p>
        </div>
      </>
    );
  }
}
export default MyForm;
