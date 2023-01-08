import styled from "styled-components";

export const StyledRemoveButton = styled.button`
  background-color: rgb(239, 59, 59);
  color: black;
  border: none;
  text-align: center;
  text-decoration: none;
  paddng: 50px 0px 50px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10%;
  min-width: 50px;
  min-height: 50px;
  width: 100px;
  position: relative;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  z-index: 400;

  &:hover {
    background-color: rgb(212, 48, 48);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: rgb(149, 32, 32);
  }
`;

export const StyledPurpleButton = styled.button`
  background-color: rgb(100, 100, 255);
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 30px
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10%;
  min-width: 50px;
  min-height: 50px;
  width: 100px;
  position: relative;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgb(80, 80, 255);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: rgb(60, 60, 255);
  }
`;

export const StyledBottomLeftDiv = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 400;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const StyledRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const StyledTitleH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  text-align: center;
  color: black;
`;

export const StyledFlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;

export const StyledFlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const StyledBlueCheckbox = styled.input.attrs({ type: "checkbox" })`
  /* style the checkbox itself */
  width: 20px;
  height: 20px;
  border: 2px solid blue;
  border-radius: 4px;
  background-color: white;
  appearance: none; /* remove default styles */

  /* style the checkmark */
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    // background-color: blue;
    border-radius: 4px;
  }

  /* style the checked state */
  &:checked {
    border-color: orange;
    &:before {
      display: block;
      background-color: orange;
      border-color: orange;
    }
  }

  /* hover state */
  &:hover {
    border-color: purple;
    cursor: pointer;
    &:before {
      background-color: purple;
    }
  }

  /* active state */
  &:active {
    border-color: red;
    &:before {
      background-color: red;
    }
  }
`;

export const StyledWhiteButton = styled.button`
  /* style the button itself */
  color: black; /* text color */
  background-color: white; /* background color */
  border: 2px solid white; /* border color */
  border-radius: 4px;
  padding: 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

  /* hover state */
  &:hover {
    background-color: lightgray; /* hover background color */
    border-color: lightgray; /* hover border color */
  }

  /* active state */
  &:active {
    background-color: gray; /* active background color */
    border-color: gray; /* active border color */
  }
`;
