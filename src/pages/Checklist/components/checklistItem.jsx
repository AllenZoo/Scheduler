import React, { useState } from "react";
import "../../../css/checklist.css";
import styled from "styled-components";
import {
  StyledFlexRowDiv,
  StyledBlueCheckbox,
} from "../../../components/styled/my-styled-cool-stuff";
import { useEffect } from "react";
import AutoHeightTextarea from "../../../components/utility/AutoHeightTextarea";

const StyledChecklistItem = styled(StyledFlexRowDiv)`
  column-gap: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  flex-wrap: wrap;
  padding: 10px 20px 10px 20px;
  width: 90%;
  justify-content: space-between;
`;

const StyledChecklistTask = styled.input.attrs({ type: "text" })`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  //background-color: transparent;
  color: black;
  text-align: flex-start;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: gray;
  }

  &:hover {
    //background-color: rgb(80, 80, 255);
  }

  &:focus {
    outline: none;
  }
`;

const ChecklistTextareaStyle = {
  display: "block",
  overflow: "hidden",
  resize: "none",
  width: "100%",
  backgroundColor: "white",
  textAlign: "left",
  borderRadius: "10px",
  paddingLeft: "10px",
  paddingTop: "5px",
  border: "1px solid gray",
  ":hover": {
    border: "1px solid black",
  },
  flex: 1,
};
function ChecklistItem(props) {
  const [checked, setChecked] = useState(false);
  const [task, setTask] = useState(props.task);

  function handleCheckboxClick(e) {
    setChecked(e.target.checked);
  }

  useEffect(() => {}, [task]);

  return (
    <StyledChecklistItem>
      <AutoHeightTextarea style={ChecklistTextareaStyle}></AutoHeightTextarea>
      <StyledBlueCheckbox onClick={handleCheckboxClick} />
    </StyledChecklistItem>
  );
}

export default ChecklistItem;
