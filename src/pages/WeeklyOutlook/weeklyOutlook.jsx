import React, { Component } from "react";
import TimeTable from "../../components/timetable/timeTable";
import "../../css/weeklyoutlook.css";

class WeeklyOutlook extends Component {
  render() {
    return (
      <div className="weekly-outlook-container">
        <div className="page-title">Weekly Outlook</div>
        <TimeTable schedule={this.props.schedule}></TimeTable>
        {/* {console.log(this.props.schedule)} */}
        <div id="content-body">
          <div>
            <button
              id="schedule-gen-button"
              onClick={this.props.generateSchedule}
            >
              Generate Schedule
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyOutlook;
