import React, { Component } from "react";
import { useRef } from "react";
import styled from "styled-components";

const TemplateFormContainer = styled.div`
  margin-top: 17px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  background-color: cornflowerblue;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
const TFTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0px;
  padding: 0px;
`;
const TFInputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const TFButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;
const TFButton = styled.button`
  background-color: rgb(219, 112, 147);
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: rgb(183, 81, 115);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background-color: rgb(131, 50, 77);
  }
`;

function TemplateForm(props) {
  const times = props.times;
  const dayRef = useRef();
  const timeStartRef = useRef();
  const timeEndRef = useRef();
  const nameRef = useRef();
  const colourRef = useRef();

  const getRandomColour = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const addToPlanTemplate = () => {
    let plan = {
      day: dayRef.current.value,
      name: nameRef.current.value,
      timeStart: timeStartRef.current.value,
      timeEnd: timeEndRef.current.value,
      colour: colourRef.current.value,
    };

    props.addToPlanTemplate(plan);
  };

  return (
    <TemplateFormContainer>
      <TFTitle>Manually Modify Slots</TFTitle>
      <select ref={dayRef}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      <TFInputRow>
        <label htmlFor="nameInput">Name:</label>
        <input type="text" placeholder="Name" ref={nameRef}></input>
      </TFInputRow>

      <TFInputRow>
        <label htmlFor="time-start">Time Start: </label>
        <select className="time-start" id="time-start" ref={timeStartRef}>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </TFInputRow>
      <TFInputRow>
        <label htmlFor="time-end">Time End: </label>
        <select className="time-end" id="time-end" ref={timeEndRef}>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </TFInputRow>
      <TFInputRow>
        <label htmlFor="colour-code">Colour: </label>
        <input
          type="color"
          defaultValue={getRandomColour()}
          ref={colourRef}
        ></input>
      </TFInputRow>
      <TFButtonRow>
        <TFButton onClick={addToPlanTemplate}>Add</TFButton>
        <TFButton onClick={props.handleClearTemplate}>Clear</TFButton>
      </TFButtonRow>
    </TemplateFormContainer>
  );
}

export default TemplateForm;
