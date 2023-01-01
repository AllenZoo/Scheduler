import React, { Component } from "react";
import { useRef } from "react";

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
    <div className="template-form-container">
      <select ref={dayRef}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      <div>
        <label htmlFor="nameInput">Name:</label>
        <input type="text" ref={nameRef}></input>
      </div>

      <div>
        <label htmlFor="time-start">Time Start:</label>
        <select className="time-start" id="time-start" ref={timeStartRef}>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="time-end">Time End</label>
        <select className="time-end" id="time-end" ref={timeEndRef}>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="colour-code">Colour: </label>
        <input
          type="color"
          defaultValue={getRandomColour()}
          ref={colourRef}
        ></input>
      </div>
      <div className="template-buttons">
        <button onClick={addToPlanTemplate}>Add</button>
        <button onClick={props.handleClearTemplate}>Clear</button>
      </div>
    </div>
  );
}

export default TemplateForm;
