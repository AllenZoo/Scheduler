import React, { Component } from "react";
import TimeTableRow from "./timeTableRow";
import uniqid from "uniqid";
import _ from "lodash";
import styled from "styled-components";

const TTBodyContainer = styled.div``;

function TimeTableBody(props) {
  const generateTimesList = () => {
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
  const times = generateTimesList();

  return (
    <div className="time-table-body">
      {
        // iterates through the times of lists
        times.map((time, i) => {
          let slots = [];

          //loops through each day and pushes activity of that day at time to array.
          props.data.map((date) => {
            // checks if data has be loaded yet.
            if (date.plan.size > 0) {
              // adds data to slots.

              let slotData = date.plan.get(time);
              slotData["date"] = date.date;
              slots.push(date.plan.get(time));
            }
          });
          //console.log(time);
          //console.log(slots);

          if (slots != null) {
            return (
              <TimeTableRow
                plan={slots}
                time={time}
                // key={slots[0] + time}
                key={uniqid()}
              ></TimeTableRow>
            );
          }
        })
      }
    </div>
  );
}

export default TimeTableBody;
