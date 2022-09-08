import React, { Component } from "react";
import ChecklistItem from "./checkListItem";

class CheckListDisplay extends Component {
  tasks = this.props.tasks;
  render() {
    return (
      <div className="checklist-display">
        {this.props.tasks.map(function (t) {
          let k = new Date().getTime;
          return <ChecklistItem key={k} task={t}></ChecklistItem>;
        })}
      </div>
    );
  }
}

export default CheckListDisplay;
