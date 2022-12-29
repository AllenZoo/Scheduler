import React from "react";
import ChecklistDisplay from "./components/checklistDisplay";
import ChecklistForm from "./components/checklistForm";
import "../../css/checklist.css";

function Checklist(props) {
  const commitments = props.commitments;
  //tasks = this.props.tasks; //<- doesn't update along with this.props.tasks

  const toggleTask = (taskId, taskState) => {
    //console.log(taskId, taskState);
    props.toggleTask(taskId, taskState);
  };

  const addTaskToList = (task) => {
    task.id = new Date().getTime();
    task.key = task.id;
    props.addChecklistTask(task);
  };

  return (
    <div>
      <div className="checklist-container">
        <div className="page-title">Todo-List</div>
        <ChecklistForm
          commitments={commitments}
          addChecklistTask={addTaskToList}
        ></ChecklistForm>
        <ChecklistDisplay
          tasks={props.tasks}
          completedTasks={props.completedTasks}
          toggleTask={toggleTask}
        ></ChecklistDisplay>
      </div>

      <div className="checklist-page-background"></div>
    </div>
  );
}

export default Checklist;
