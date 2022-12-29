import React, { Component } from "react";
import TimeTable from "../../components/timetable/timeTable";
import "../../css/weeklyoutlook.css";

function WeeklyOutlook(props) {
  return (
    <div className="weekly-outlook-container">
      <div className="page-title">Weekly Outlook</div>
      <TimeTable schedule={props.schedule}></TimeTable>
      {/* {console.log(props.schedule)} */}
      <div id="content-body">
        <div>
          <button id="schedule-gen-button" onClick={props.generateSchedule}>
            Generate Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeeklyOutlook;
