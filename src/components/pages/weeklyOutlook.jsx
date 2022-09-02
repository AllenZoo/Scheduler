import React, { Component } from "react";
import Navbar from "../navbar";
import TimeTable from "../timetable/timeTable";

class WeeklyOutlook extends Component {
  render() {
    return (
      <div>
        <TimeTable schedule={this.props.schedule}></TimeTable>
        {/* {console.log(this.props.schedule)} */}
        <div id="content-body">
          <div>
            <button onClick={this.props.generateSchedule}>
              Generate Schedule
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyOutlook;
