import React, { Component } from "react";
import "../css/sidebutton.css";
import { useRef } from "react";

class CommitmentForm extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.commitmentTypeRef = React.createRef();
    this.commitmentNameRef = React.createRef();
    this.timeTypeRef = React.createRef();
    this.inputMinuteRef = React.createRef();
    this.inputHourRef = React.createRef();
  }

  handleSubmit = () => {
    console.log("submitted form!");
  };

  handleClick = (e) => {
    e.preventDefault();
    //console.log("clicked button " + this.commitmentTypeRef.current.value);
    let commitment = {
      name: this.commitmentNameRef.current.value,
      type: this.commitmentTypeRef.current.value,
      timeType: this.timeTypeRef.current.value,
      hours: this.inputHourRef.current.value,
      minutes: this.inputMinuteRef.current.value,
    };
    this.props.handleFormSubmit(commitment);
  };

  //onSubmit={this.handleSubmit}

  render() {
    return (
      <form id="add-commitment-form">
        <h1>Add Commitment</h1>
        <div>
          <label htmlFor="commitment-type-selector">Commitment:</label>
          <select
            name="commitment-type-selector"
            id="commitment-type-selector"
            defaultValue={"DEFAULT"}
            ref={this.commitmentTypeRef}
          >
            <option value="DEFAULT" disabled>
              --select an option--
            </option>
            <option value="UBC Course">UBC course</option>
            <option value="Online Course">Online course</option>
            <option value="Appointment">Appointment</option>
          </select>
        </div>
        <div>
          <label htmlFor="commitment-input-name">Name:</label>
          <input
            type="text"
            name="commitment-input-name"
            id="commitment-input-name"
            ref={this.commitmentNameRef}
          />
        </div>
        <div>
          <label htmlFor="commitment-time-type-selector">Type:</label>
          <select
            name="commitment-time-type-selector"
            id="commitment-time-type-selector"
            defaultValue={"DEFAULT"}
            ref={this.timeTypeRef}
          >
            <option value="DEFAULT" disabled></option>
            <option value="One-Time">One-time</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-weekly">Bi-weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
        <div>
          <label htmlFor="time-input-hour">Time required:</label>
          <input
            type="number"
            name="time-input-hour"
            id="time-input-hour"
            pattern="^[0-9]"
            placeholder="1"
            ref={this.inputHourRef}
          />
          <p style={{ display: "inline" }}>hour(s)</p>

          <label htmlFor="time-input-minute"></label>
          <select
            name="time-input-minute"
            id="time-input-minute"
            defaultValue={"DEFAULT"}
            ref={this.inputMinuteRef}
          >
            <option value="DEFAULT" disabled></option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
          <p style={{ display: "inline" }}>minutes</p>
        </div>
        <div></div>
        <div>
          <button
            id="commitment-confirm-button"
            className="shadow-button"
            onClick={this.handleClick}
            //type="submit"
          >
            Add
          </button>
          <button id="commitment-cancel-button" className="shadow-button">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default CommitmentForm;
