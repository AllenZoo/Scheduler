import React, { Component } from "react";
import TimeTable from "../timetable/timeTable";
import "../../css/template.css";

class Templates extends Component {
  times = this.props.times;
  constructor(props) {
    super(props);
    this.dayRef = React.createRef();
    this.timeStartRef = React.createRef();
    this.timeEndRef = React.createRef();
    this.nameRef = React.createRef();
  }

  addToPlanTemplate = () => {
    let day = this.dayRef.current.value;
    let name = this.nameRef.current.value;
    let timeStart = this.timeStartRef.current.value;
    let timeEnd = this.timeEndRef.current.value;

    this.props.handleAddToPlan(day, name, timeStart, timeEnd);
  };

  render() {
    return (
      <div>
        <div className="template-container">
          <TimeTable schedule={this.props.template}></TimeTable>
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
            <div className="template-buttons">
              <button onClick={this.addToPlanTemplate}>Add</button>
              <button onClick={this.props.handleClearTemplate}>Clear</button>
            </div>
          </div>
        </div>
        <div id="content-body"></div>
      </div>
    );
  }
}

export default Templates;
