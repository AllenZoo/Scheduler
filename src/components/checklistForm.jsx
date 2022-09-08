import React, { Component } from "react";
import "../css/checklist.css";

class ChecklistForm extends Component {
  constructor(props) {
    super(props);
    this.comRef = React.createRef();
    this.taskRef = React.createRef();
  }

  commitments = this.props.commitments;

  addChecklistTask = (e) => {
    e.preventDefault();
    let comName = this.comRef.current.value;
    let taskInput = this.taskRef.current.value;

    let task = {
      commitmentName: comName,
      taskDescription: taskInput,
    };

    this.props.addChecklistTask(task);
  };

  render() {
    return (
      <form className="checklist-form">
        <div>
          <label htmlFor="checklist-commitment-selection">Commitment: </label>
          <select className="checklist-commitment-selection" ref={this.comRef}>
            {this.commitments.map((commitment) => (
              <option key={commitment.id} value={commitment.name}>
                {commitment.name}
              </option>
            ))}
          </select>
        </div>

        <textarea
          type="text"
          placeholder="task description"
          className="task-input"
          rows="4"
          cols="50"
          ref={this.taskRef}
        ></textarea>

        <div>
          <button onClick={this.addChecklistTask}>Add</button>
        </div>
      </form>
    );
  }
}

export default ChecklistForm;
