import React, { Component } from "react";
import ChecklistItem from "./checklistItem";

function ChecklistDisplay(props) {
  function toggleState(taskId, taskState) {
    //console.log(e.target.checked);
    props.toggleTask(taskId, taskState);
  }

  return (
    <div className="checklist-display-container">
      <p>Incomplete Tasks</p>
      <div className="checklist-display">
        {props.tasks.map((t) => {
          return (
            <ChecklistItem
              key={t.id}
              id={t.id}
              task={t}
              toggleState={toggleState}
              checkState={false}
            ></ChecklistItem>
          );
        })}
      </div>

      <p>Completed Tasks!</p>
      <div className="checklist-display">
        {props.completedTasks.map((t) => {
          return (
            <ChecklistItem
              key={t.id}
              id={t.id}
              task={t}
              toggleState={toggleState}
              checkState={true}
            ></ChecklistItem>
          );
        })}
      </div>
    </div>
  );
}

export default ChecklistDisplay;
