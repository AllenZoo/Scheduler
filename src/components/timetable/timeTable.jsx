import React, { Component } from "react";
import DateColumn from "./dateColumn";
import TimeBar from "./timebar";
import "../../css/table.css";
import "../../css/contentbody.css";
import TimeTableHeader from "./timeTableHeader";

class TimeTable extends Component {
  generateTimesList = () => {
    //credit to: Nicholas Tower & Harpreet
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 60 * 8; // start time
    var ap = ["AM", "PM"]; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] =
        ("" + (hh == 12 ? 12 : hh % 12)).slice(-2) +
        ":" +
        ("0" + mm).slice(-2) +
        ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }

    return times;
  };
  times = this.generateTimesList();

  render() {
    return (
      <div id="time-table">
        {/* <div id="time-stamp-bar">
          <TimeBar></TimeBar>
        </div>
        <div id="time-table-dates">
          {this.props.schedule.map((dateColumn) => (
            <DateColumn key={dateColumn.date} data={dateColumn}></DateColumn>
          ))}
        </div> */}
        <div>
          <TimeTableHeader data={this.props.schedule}></TimeTableHeader>
        </div>
      </div>
    );
  }
}

export default TimeTable;
