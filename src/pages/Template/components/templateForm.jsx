import React, { Component } from "react";

class TemplateForm extends Component {
  times = this.props.times;
  constructor(props) {
    super(props);
    this.dayRef = React.createRef();
    this.timeStartRef = React.createRef();
    this.timeEndRef = React.createRef();
    this.colourRef = React.createRef();
    this.nameRef = React.createRef();
  }

  addToPlanTemplate = () => {
    //let day = this.dayRef.current.value;
    //let name = this.nameRef.current.value;
    //let timeStart = this.timeStartRef.current.value;
    //let timeEnd = this.timeEndRef.current.value;
    //let colour = this.colourRef.current.value;

    let plan = {
      day: this.dayRef.current.value,
      name: this.nameRef.current.value,
      timeStart: this.timeStartRef.current.value,
      timeEnd: this.timeEndRef.current.value,
      colour: this.colourRef.current.value,
    };

    this.props.addToPlanTemplate(plan);
  };

  render() {
    return (
      <div className="template-form-container">
        <select ref={this.dayRef}>
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
          <input type="text" ref={this.nameRef}></input>
        </div>

        <div>
          <label htmlFor="time-start">Time Start:</label>
          <select
            className="time-start"
            id="time-start"
            ref={this.timeStartRef}
          >
            {this.times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="time-end">Time End</label>
          <select className="time-end" id="time-end" ref={this.timeEndRef}>
            {this.times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="colour-code">Colour: </label>
          <input type="color" ref={this.colourRef}></input>
        </div>
        <div className="template-buttons">
          <button onClick={this.addToPlanTemplate}>Add</button>
          <button onClick={this.props.handleClearTemplate}>Clear</button>
        </div>
      </div>
    );
  }
}

export default TemplateForm;
