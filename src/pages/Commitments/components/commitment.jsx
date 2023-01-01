import React, { Component } from "react";
import "../../../css/general.css";
import styled from "styled-components";

const CommitmentDisplayContainer = styled.div`
  position: relative;
  border-collapse: separate;
`;
const CommitmentDisplay = styled.div`
  background-color: chartreuse;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;

  div {
    font-size: 30px;
  }
`;
const CommitmentDeleteButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: brown;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgb(227, 93, 93);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

function Commitment(props) {
  function onDelete() {
    props.onDelete(props.commitment.id);
  }

  const { commitment } = props;

  return (
    <CommitmentDisplayContainer>
      <CommitmentDisplay style={{ backgroundColor: commitment.colour }}>
        <div>
          <strong>{commitment.name}</strong>
        </div>
        <div>{commitment.timeType}</div>
        <div>
          {commitment.hours} hours {commitment.minutes} minutes
        </div>
      </CommitmentDisplay>
      <CommitmentDeleteButton onClick={onDelete}>X</CommitmentDeleteButton>
    </CommitmentDisplayContainer>
  );
}

export default Commitment;
