import React, { Component } from "react";
import TimeTable from "../../components/timetable/timeTable";
import "../../css/weeklyoutlook.css";
import styled from "styled-components";

const WOButton = styled.button`
  background-color: rgb(219, 112, 147);
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: rgb(183, 81, 115);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }

  z-index: 300;
`;
function WeeklyOutlook(props) {
  return (
    <div className="weekly-outlook-container">
      <div className="page-title">Weekly Outlook</div>
      <TimeTable schedule={props.schedule} interactable={false}></TimeTable>
      {/* {console.log(props.schedule)} */}
      <div id="content-body"></div>
      <WOButton onClick={props.generateSchedule}>Generate Schedule</WOButton>
    </div>
  );
}

export default WeeklyOutlook;
