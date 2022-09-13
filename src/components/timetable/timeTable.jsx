import React, { Component } from "react";
import DateColumn from "./dateColumn";
import TimeBar from "./timebar";
import "../../css/table.css";
import "../../css/contentbody.css";

class TimeTable extends Component {
  render() {
    return (
      <div id="time-table">
        <div id="time-stamp-bar">
          <TimeBar></TimeBar>
        </div>
        <div id="time-table-dates">
          {this.props.schedule.map((dateColumn) => (
            <DateColumn key={dateColumn.date} data={dateColumn}></DateColumn>
          ))}
        </div>
      </div>
    );
  }
}

export default TimeTable;
