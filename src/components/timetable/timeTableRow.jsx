import React, { Component } from "react";
import uniqid from "uniqid";

function TimeTableRow(props) {
  return (
    <div className="time-table-row-container">
      <div className="time-table-row-time-container">{props.time}</div>
      <div className="time-table-row-plan-container">
        {props.plan.map((slot) => {
          let id = uniqid();

          if (slot.colour != "" && slot.name != "") {
            return (
              <div
                className="time-table-row-plan-slot"
                style={{ backgroundColor: slot.colour }}
                key={id}
              >
                {slot.name}
              </div>
            );
          } else {
            return (
              <div
                className="time-table-row-plan-slot"
                style={{ backgroundColor: "darkgoldenrod" }}
                key={id}
              >
                &#10240;
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TimeTableRow;
