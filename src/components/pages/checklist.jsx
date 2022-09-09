import React, { Component } from "react";
import CheckListDisplay from "../checklistDisplay";
import ChecklistForm from "../checklistForm";

class Checklist extends Component {
  state = {};

  commitments = this.props.commitments;
  //tasks = this.props.tasks; //<- doesn't update along with this.props.tasks

  toggleTask = (taskId, taskState) => {
    //console.log(taskId, taskState);
    this.props.toggleTask(taskId, taskState);
  };

  addTaskToList = (task) => {
    task.id = new Date().getTime();
    task.key = task.id;
    this.props.addChecklistTask(task);
  };

  render() {
    return (
      <div>
        <div className="checklist-container">
          <ChecklistForm
            commitments={this.commitments}
            addChecklistTask={this.addTaskToList}
          ></ChecklistForm>
          <CheckListDisplay
            tasks={this.props.tasks}
            completedTasks={this.props.completedTasks}
            toggleTask={this.toggleTask}
          ></CheckListDisplay>
        </div>
      </div>
    );
  }
}

export default Checklist;
