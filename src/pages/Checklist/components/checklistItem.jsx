import React, { useState } from "react";
import "../../../css/checklist.css";
import styled from "styled-components";
import {
  StyledFlexRowDiv,
  StyledBlueCheckbox,
  StyledRedButton,
  StyledIconImage,
} from "../../../components/styled/my-styled-cool-stuff";
import { useEffect } from "react";
import AutoHeightTextarea from "../../../components/utility/AutoHeightTextarea";
import { CommitmentDeleteButton } from "../../Commitments/components/commitment";
import xMark from "../../../icons/xmark-solid.svg";

const StyledChecklistItem = styled(StyledFlexRowDiv)`
  column-gap: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  flex-wrap: wrap;
  padding: 10px 20px 10px 7px;
  width: 90%;
  justify-content: space-between;
  position: relative;
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
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
  ":hover": {
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.75)",
  },
  border: "none",
  ":hover": {
    border: "1px solid black",
  },
  flex: 1,
};
const StyledChecklistDeleteButton = styled(CommitmentDeleteButton)`
  top: -5px;
  right: -5px;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ChecklistItem(props) {
  const [checked, setChecked] = useState(false);
  const [task, setTask] = useState(props.task);

  function handleCheckboxClick(e) {
    setChecked(e.target.checked);
  }

  function handleDeleteClick(e) {
    props.onDeleteTask(task.id);
  }

  return (
    <StyledChecklistItem>
      <AutoHeightTextarea
        style={ChecklistTextareaStyle}
        placeholder="new task"
      ></AutoHeightTextarea>
      <StyledChecklistDeleteButton onClick={handleDeleteClick}>
        <StyledIconImage src={xMark} />
      </StyledChecklistDeleteButton>
      <StyledBlueCheckbox onClick={handleCheckboxClick} />
    </StyledChecklistItem>
  );
}

export default ChecklistItem;
