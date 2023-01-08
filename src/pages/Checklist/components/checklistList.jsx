import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import add from "../../../icons/add.png";
import chevronDown from "../../../icons/chevron-down-solid.svg";
import uniqid from "uniqid";

import {
  StyledFlexColumnDiv,
  StyledFlexRowDiv,
  StyledTitleH2,
  StyledWhiteButton,
} from "../../../components/styled/my-styled-cool-stuff";
import ChecklistItem from "./checklistItem";

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

const StyledIconImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

function ChecklistList(props) {
  const [commitment, setCommitment] = useState(props.commitment);
  const [title, setTitle] = useState("defaultTitle");
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function addEmptyTask() {
    let newTask = {
      id: uniqid(),
      task: "",
      completed: false,
      description: "",
    };
    addTask(newTask);
  }

  useEffect(() => {
    let newTasks = [];

    let task1 = {
      id: 1,
      task: "task1",
      completed: false,
      description: "description1",
    };
    let task2 = {
      id: 2,
      task: "task2",
      completed: false,
      description: "description2",
    };

    newTasks.push(task1);
    newTasks.push(task2);
    newTasks.push(task2);

    setTasks(newTasks);
    console.log("tasks", tasks);
  }, []);

  return (
    <div>
      <StyledChecklistContainer>
        <StyledTitleH2>{title}</StyledTitleH2>
        <StyledFlexRowDiv>
          <StyledCheckListButton>
            <StyledIconImage src={add} onClick={addEmptyTask} />
          </StyledCheckListButton>
          <StyledCheckListButton>
            <StyledIconImage src={chevronDown} />
          </StyledCheckListButton>
        </StyledFlexRowDiv>

        {tasks.map((task) => {
          return <ChecklistItem task={task} key={uniqid()}></ChecklistItem>;
        })}
      </StyledChecklistContainer>
    </div>
  );
}

export default ChecklistList;
