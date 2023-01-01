import React, { Component } from "react";
import uniqid from "uniqid";
import TimeTableSlot from "./timeTableSlot";

function TimeTableRow(props) {
  return (
    <div className="time-table-row-container">
      <div className="time-table-row-time-container">{props.time}</div>
      <div className="time-table-row-plan-container">
        {props.plan.map((slot) => {
          let id = uniqid();

          return (
            <TimeTableSlot
              slot={slot}
              time={props.time}
              key={id}
              id={id}
            ></TimeTableSlot>
          );
        })}
      </div>
    </div>
  );
}

export default TimeTableRow;
