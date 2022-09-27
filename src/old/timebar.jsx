import React, { Component } from "react";

class TimeBar extends Component {
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

  render() {
    return (
      <div id="time-stamp-bar">
        {this.generateTimesList().map((time) => (
          <p key={time}>{time}</p>
        ))}
      </div>
    );
  }
}

export default TimeBar;

{
  /* <p>9:00 am</p>
        <p>9:30 am</p>
        <p>10:00 am</p>
        <p>10:30 am</p>
        <p>11:00 am</p>
        <p>11:30 am</p>
        <p>12:00 pm</p>
        <p>12:30 pm</p>
        <p>1:00 pm</p>
        <p>1:30 pm</p>
        <p>2:00 pm</p>
        <p>2:30 pm</p>
        <p>3:00 pm</p>
        <p>3:30 pm</p>
        <p>4:00 pm</p>
        <p>4:30 pm</p>
        <p>5:00 pm</p>
        <p>5:30 pm</p>
        <p>6:00 pm</p>
        <p>6:30 pm</p>
        <p>7:00 pm</p>
        <p>7:30 pm</p>
        <p>8:00 pm</p>
        <p>8:30 pm</p>
        <p>9:00 pm</p>
        <p>9:30 pm</p>
        <p>10:00 pm</p>
        <p>10:30 pm</p>
        <p>11:00 pm</p>
        <p>11:30 pm</p>
        <p>12:00 am</p>
        <p>12:30 am</p>
        <p>1:00 am</p>
        <p>1:30 am</p> */
}
