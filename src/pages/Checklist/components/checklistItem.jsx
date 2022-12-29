import React, { Component } from "react";
import "../../../css/checklist.css";

function ChecklistItem(props) {
  // const [checked, setChecked] = useState(false);
  const task = props.task;

  const handleChange = (e) => {
    // console.log(e);
    //this.props.toggleTask();
    props.toggleState(props.id, e.target.checked);
  };

  return (
    <div className="checklist-item">
      <div className="checklist-name">{task.commitmentName}</div>
      <div className="checklist-description">{task.taskDescription}</div>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={props.checkState}
      ></input>
    </div>
  );
}

export default ChecklistItem;
