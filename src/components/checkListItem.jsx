import React, { Component } from "react";
import "../css/checklist.css";

class ChecklistItem extends Component {
  render() {
    const task = this.props.task;

    return (
      <div className="checklist-item">
        <div className="checklist-name">{task.commitmentName}</div>
        <div className="checklist-description">{task.taskDescription}</div>
        <input type="checkbox"></input>
      </div>
    );
  }
}

export default ChecklistItem;
