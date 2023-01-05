import React, { useState } from "react";
import "../../../css/checklist.css";
import styled from "styled-components";
import {
  StyledFlexRowDiv,
  StyledBlueCheckbox,
} from "../../../components/styled/my-styled-cool-stuff";

const StyledChecklistItem = styled(StyledFlexRowDiv)`
  column-gap: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  flex-wrap: wrap;
  padding: 10px 20px 10px 20px;
  width: 90%;
  justify-content: space-between;
`;

function ChecklistItem(props) {
  const [checked, setChecked] = useState(false);
  const task = props.task;

  return (
    <StyledChecklistItem>
      <div>task: do some homework :)</div>
      <StyledBlueCheckbox />
    </StyledChecklistItem>
  );
}

export default ChecklistItem;
