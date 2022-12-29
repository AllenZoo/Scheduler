import React from "react";
import { useRef } from "react";
import "../../../css/checklist.css";

function ChecklistForm(props) {
  const comRef = useRef();
  const taskRef = useRef();

  const commitments = props.commitments;

  const addChecklistTask = (e) => {
    e.preventDefault();
    let comName = comRef.current.value;
    let taskInput = taskRef.current.value;

    let task = {
      commitmentName: comName,
      taskDescription: taskInput,
    };

    props.addChecklistTask(task);
  };

  const hideCompletedTasks = (e) => {
    e.preventDefault();
    alert("todo!");
  };

  return (
    <form className="checklist-form">
      <div>
        <label htmlFor="checklist-commitment-selection">Commitment: </label>
        <select className="checklist-commitment-selection" ref={comRef}>
          {commitments.map((commitment) => (
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
        ref={taskRef}
      ></textarea>

      <div className="checklist-form-button-container">
        <button id="add-task-button" onClick={addChecklistTask}>
          Add
        </button>
        <button id="hide-tasks-button" onClick={hideCompletedTasks}>
          Hide Completed
        </button>
      </div>
    </form>
  );
}

export default ChecklistForm;
