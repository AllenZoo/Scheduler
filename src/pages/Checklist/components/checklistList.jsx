import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import add from "../../../icons/add.png";
import chevronDown from "../../../icons/chevron-down-solid.svg";
import chevronUp from "../../../icons/chevron-up-solid.svg";
import uniqid from "uniqid";

import {
  StyledFlexColumnDiv,
  StyledFlexRowDiv,
  StyledTitleH2,
  StyledWhiteButton,
} from "../../../components/styled/my-styled-cool-stuff";
import ChecklistItem from "./checklistItem";
import { useRef } from "react";

const StyledChecklistContainer = styled(StyledFlexColumnDiv)`
  row-gap: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  width: 45%;
  padding: 10px;
  padding-bottom: 20px;
`;

const StyledCheckListButton = styled(StyledWhiteButton)`
  font-size: 1px;
  margin: 0px;
  padding: 10px;
`;

const StyledIconImageCL = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

function ChecklistList(props) {
  const [commitment, setCommitment] = useState(props.commitment);
  const [showTasks, setShowTasks] = useState(true);
  const [title, setTitle] = useState(props.title);
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setShowTasks(true);
    setTasks([...tasks, task]);
  }

  function addEmptyTask() {
    //console.log("addEmptyTask");
    let newTask = {
      id: uniqid(),
      task: "",
      completed: false,
      description: "",
    };
    //setTasks([...tasks, newTask]);
    addTask(newTask);
  }

  function toggleShowTasks() {
    setShowTasks(!showTasks);
  }

  function onDeleteTask(taskId) {
    console.log("onDeleteTask", taskId);
    let newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  useEffect(() => {
    // let task1 = {
    //   id: 1,
    //   task: "task1",
    //   completed: false,
    //   description: "description1",
    // };
    // let task2 = {
    //   id: 2,
    //   task: "task2",
    //   completed: false,
    //   description: "description2",
    // };
    // addTask(task1);
    // addTask(task2);
  }, []);

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  return (
    <div>
      <StyledChecklistContainer>
        <StyledTitleH2>{title}</StyledTitleH2>
        <StyledFlexRowDiv>
          <StyledCheckListButton onClick={addEmptyTask}>
            <StyledIconImageCL src={add} />
          </StyledCheckListButton>
          <StyledCheckListButton onClick={toggleShowTasks}>
            {showTasks ? (
              <StyledIconImageCL src={chevronDown} />
            ) : (
              <StyledIconImageCL src={chevronUp} />
            )}
          </StyledCheckListButton>
        </StyledFlexRowDiv>

        {showTasks &&
          tasks.map((task) => {
            return (
              <ChecklistItem
                task={task}
                key={uniqid()}
                onDeleteTask={onDeleteTask}
              ></ChecklistItem>
            );
          })}
      </StyledChecklistContainer>
    </div>
  );
}

export default ChecklistList;