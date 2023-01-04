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
`;
function ChecklistList(props) {
  const [commitment, setCommitment] = useState(props.commitment);
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <StyledChecklistContainer>
        <StyledTitleH2>Title</StyledTitleH2>
        <div>Hiii</div>
        <div>Hiii</div>
        <div>Hiii</div>
        <ChecklistItem></ChecklistItem>
      </StyledChecklistContainer>
    </div>
  );
}

export default ChecklistList;
