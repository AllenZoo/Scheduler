import React, { Component } from "react";
import CheckListDisplay from "../checklistDisplay";
import ChecklistForm from "../checklistForm";

class Checklist extends Component {
  state = {};

  commitments = this.props.commitments;
  tasks = this.props.tasks;

  render() {
    return (
      <div>
        <div className="checklist-container">
          <ChecklistForm commitments={this.commitments}></ChecklistForm>
          <CheckListDisplay tasks={this.tasks}></CheckListDisplay>
        </div>
      </div>
    );
  }
}

export default Checklist;
