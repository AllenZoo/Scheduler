import React, { useState } from "react";
import "../../../css/checklist.css";
import styled from "styled-components";
import {
  StyledFlexRowDiv,
  StyledBlueCheckbox,
} from "../../../components/styled/my-styled-cool-stuff";

const StyledChecklistItem = styled(StyledFlexRowDiv)`
  column-gap: 10px;
`;

function ChecklistItem(props) {
  const [checked, setChecked] = useState(false);
  const task = props.task;

  return (
    <StyledChecklistItem>
      <StyledBlueCheckbox></StyledBlueCheckbox>
    </StyledChecklistItem>
  );
}

export default ChecklistItem;
