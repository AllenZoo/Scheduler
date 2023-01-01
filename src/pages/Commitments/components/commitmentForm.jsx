import React, { Component } from "react";
import "../../../css/sidebutton.css";
import { useRef } from "react";
import styled from "styled-components";

const CommitmentFormStyled = styled.form`
  max-height: 480px;
  max-width: 480px;
  background-color: blueviolet;
  position: fixed;
  border-radius: 20px;
  right: 50px;
  bottom: 50px;
  z-index: 201;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const CFTitle = styled.h1`
  font-size: 30px;
  margin: 0px;
  padding: 0px;
`;

const CFButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  column-gap: 10px;
`;

const CFButton = styled.button`
  background-color: blanchedalmond;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: rgb(172, 139, 90);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

function CommitmentForm(props) {
  const commitmentTypeRef = useRef();
  const commitmentNameRef = useRef();
  const timeTypeRef = useRef();
  const inputMinuteRef = useRef();
  const inputHourRef = useRef();
  const colourRef = useRef();

  function handleSubmit() {
    console.log("submitted form!");
  }

  const getRandomColour = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const resetForm = (e) => {
    e.preventDefault();
    commitmentTypeRef.current.value = "DEFAULT";
    commitmentNameRef.current.value = "";
    timeTypeRef.current.value = "DEFAULT";
    inputMinuteRef.current.value = "";
    inputHourRef.current.value = "";
    colourRef.current.value = getRandomColour();
  };

  function handleSubmit(e) {
    e.preventDefault();
    //console.log("clicked button " + this.commitmentTypeRef.current.value);
    let commitment = {
      name: commitmentNameRef.current.value,
      type: commitmentTypeRef.current.value,
      timeType: timeTypeRef.current.value,
      hours: inputHourRef.current.value,
      minutes: inputMinuteRef.current.value,
      colour: colourRef.current.value,
    };
    console.log(commitment);
    // TODO: add validation
    props.handleFormSubmit(commitment);
    resetForm(e);
  }

  return (
    <CommitmentFormStyled>
      <CFTitle>Add Commitment</CFTitle>
      <div>
        <label htmlFor="commitment-type-selector">Commitment:</label>
        <select
          name="commitment-type-selector"
          id="commitment-type-selector"
          defaultValue={"DEFAULT"}
          ref={commitmentTypeRef}
        >
          <option value="DEFAULT" disabled>
            --select an option--
          </option>
          <option value="UBC Course">UBC course</option>
          <option value="Online Course">Online course</option>
          <option value="Appointment">Appointment</option>
          <option value="Work">Work</option>
          <option value="Exercise">Exercise</option>
          <option value="Reading">Reading</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="commitment-input-name">Name:</label>
        <input
          type="text"
          name="commitment-input-name"
          id="commitment-input-name"
          ref={commitmentNameRef}
        />
      </div>
      <div>
        <label htmlFor="commitment-time-type-selector">Type:</label>
        <select
          name="commitment-time-type-selector"
          id="commitment-time-type-selector"
          defaultValue={"DEFAULT"}
          ref={timeTypeRef}
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
          ref={inputHourRef}
        />
        <p style={{ display: "inline" }}>hour(s)</p>

        <label htmlFor="time-input-minute"></label>
        <select
          name="time-input-minute"
          id="time-input-minute"
          defaultValue={"DEFAULT"}
          ref={inputMinuteRef}
        >
          <option value="DEFAULT" disabled></option>
          <option value="0">0</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        <p style={{ display: "inline" }}>minutes</p>
      </div>
      <div>
        <label htmlFor="colour-picker">Colour: </label>
        <input
          type="color"
          defaultValue={getRandomColour()}
          id="colour-picker"
          ref={colourRef}
        ></input>
      </div>
      <div></div>
      <CFButtonRow>
        <CFButton
          onClick={handleSubmit}
          //type="submit"
        >
          Add
        </CFButton>
        <CFButton onClick={resetForm}>Clear</CFButton>
      </CFButtonRow>
    </CommitmentFormStyled>
  );
}

export default CommitmentForm;
