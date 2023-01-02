import React, { Component } from "react";
import { useRef } from "react";
import {
  StyledPurpleButton,
  StyledRowDiv,
  StyledTitleH2,
} from "../../components/styled/my-styled-cool-stuff";
import "../../css/data.css";
import styled from "styled-components";

const DataPageContainer = styled.div`
  position: relative;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
`;
const DBOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  padding: 20px;

  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;
const LocalOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  padding: 20px;

  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;

function Data(props) {
  const userRef = useRef();

  function handleSaveDB() {
    props.handleSaveDB(userRef.current.value);
  }

  function handleLoadDB() {
    props.handleLoadDB(userRef.current.value);
  }

  function handleSaveLocal() {
    props.handleSaveLocal();
  }

  function handleLoadLocal() {
    props.handleLoadLocal();
  }

  return (
    <div>
      <div className="page-title">Save or Load Data</div>
      <DataPageContainer>
        <DBOptionContainer>
          <StyledTitleH2>Database Option</StyledTitleH2>
          <div>
            <label htmlFor="user-name-input">User: </label>
            <input id="user-name-input" type="text" ref={userRef}></input>
          </div>
          <StyledRowDiv>
            <StyledPurpleButton
              style={{ width: "130px" }}
              onClick={handleSaveDB}
            >
              Save to Database
            </StyledPurpleButton>
            <StyledPurpleButton
              style={{ width: "130px" }}
              onClick={handleLoadDB}
            >
              Load to Database
            </StyledPurpleButton>
          </StyledRowDiv>
        </DBOptionContainer>

        <LocalOptionContainer>
          <StyledTitleH2>Local Storage Option</StyledTitleH2>
          <StyledRowDiv>
            <StyledPurpleButton onClick={handleSaveLocal}>
              Save Local
            </StyledPurpleButton>
            <StyledPurpleButton onClick={handleLoadLocal}>
              Load Local
            </StyledPurpleButton>
          </StyledRowDiv>
        </LocalOptionContainer>
      </DataPageContainer>
      <div className="data-page-background"></div>
    </div>
  );
}
export default Data;
