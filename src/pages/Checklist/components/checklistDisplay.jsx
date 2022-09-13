import React, { Component } from "react";
import ChecklistItem from "./checklistItem";

class ChecklistDisplay extends Component {
  toggleState = (taskId, taskState) => {
    //console.log(e.target.checked);
    this.props.toggleTask(taskId, taskState);
  };

  render() {
    return (
      <div className="checklist-display-container">
        <p>Incomplete Tasks</p>
        <div className="checklist-display">
          {this.props.tasks.map((t) => {
            return (
              <ChecklistItem
                key={t.id}
                id={t.id}
                task={t}
                toggleState={this.toggleState}
                checkState={false}
              ></ChecklistItem>
            );
          })}
        </div>

        <p>Completed Tasks!</p>
        <div className="checklist-display">
          {this.props.completedTasks.map((t) => {
            return (
              <ChecklistItem
                key={t.id}
                id={t.id}
                task={t}
                toggleState={this.toggleState}
                checkState={true}
              ></ChecklistItem>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ChecklistDisplay;
