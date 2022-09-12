import React, { Component } from "react";
import "../../../css/checklist.css";

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

  hideCompletedTasks = () => {};

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

        <div className="checklist-form-button-container">
          <button id="add-task-button" onClick={this.addChecklistTask}>
            Add
          </button>
          <button id="hide-tasks-button" onClick={this.hideCompletedTasks}>
            Hide Completed
          </button>
        </div>
      </form>
    );
  }
}

export default ChecklistForm;
