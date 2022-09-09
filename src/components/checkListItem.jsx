import React, { Component } from "react";
import "../css/checklist.css";

class ChecklistItem extends Component {
  // const [checked, setChecked] = useState(false);

  handleChange = (e) => {
    // console.log(e);
    //this.props.toggleTask();
    this.props.toggleState(this.props.id, e.target.checked);
  };

  render() {
    const task = this.props.task;

    return (
      <div className="checklist-item">
        <div className="checklist-name">{task.commitmentName}</div>
        <div className="checklist-description">{task.taskDescription}</div>
        <input
          type="checkbox"
          onChange={this.handleChange}
          checked={this.props.checkState}
        ></input>
      </div>
    );
  }
}

export default ChecklistItem;
