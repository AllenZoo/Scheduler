import React from "react";
import uniqid from "uniqid";
import styled from "styled-components";

const TTHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 10px;
  padding-bottom: 10px;
  flex: 9;
`;
const TTHeaderDayText = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

function TimeTableHeader(props) {
  return (
    <TTHeader>
      {props.data.map((date) => {
        let id = uniqid();
        return <TTHeaderDayText key={id}>{date.date}</TTHeaderDayText>;
      })}
    </TTHeader>
  );
}

export default TimeTableHeader;
