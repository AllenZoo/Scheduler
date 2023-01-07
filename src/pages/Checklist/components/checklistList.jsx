import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  StyledFlexColumnDiv,
  StyledTitleH2,
} from "../../../components/styled/my-styled-cool-stuff";
import ChecklistItem from "./checklistItem";

const StyledChecklistContainer = styled(StyledFlexColumnDiv)`
  row-gap: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  width: 45%;
  padding: 10px;
  padding-bottom: 20px;
`;
function ChecklistList(props) {
  const [commitment, setCommitment] = useState(props.commitment);
  const [title, setTitle] = useState("defaultTitle");
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
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

        {tasks.map((task) => {
          return <ChecklistItem task={task}></ChecklistItem>;
        })}
      </StyledChecklistContainer>
    </div>
  );
}

export default ChecklistList;
