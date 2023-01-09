import React from "react";
import ChecklistDisplay from "./components/checklistDisplay";
import ChecklistForm from "./components/checklistForm";
import "../../css/checklist.css";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../App";
import ChecklistList from "./components/checklistList";
import { uniqueId } from "lodash";

const ChecklistPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 200;
`;

function Checklist(props) {
  const { commitments } = useContext(AppContext);
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
        {commitments.map((c) => (
          <ChecklistList commitment={c} key={uniqueId()}></ChecklistList>
        ))}
      </div>
      <div className="checklist-page-background"></div>
    </div>
  );
}

export default Checklist;
