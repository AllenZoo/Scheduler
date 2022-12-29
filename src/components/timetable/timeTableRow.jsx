import React, { Component } from "react";

function TimeTableRow(props) {
  return (
    <div className="time-table-row-container">
      <div className="time-table-row-time-container">{props.time}</div>
      <div className="time-table-row-plan-container">
        {props.plan.map((slot) => {
          if (slot.colour != "" && slot.name != "") {
            return (
              <div
                className="time-table-row-plan-slot"
                style={{ backgroundColor: slot.colour }}
              >
                {slot.name}
              </div>
            );
          } else {
            return (
              <div
                className="time-table-row-plan-slot"
                style={{ backgroundColor: "darkgoldenrod" }}
              >
                |
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TimeTableRow;
