import React, { Component } from "react";

class TimeTableRow extends Component {
  render() {
    return (
      <div className="time-table-row-container">
        <div className="time-table-row-time-container">{this.props.time}</div>
        <div className="time-table-row-plan-container">
          {this.props.plan.map((slot) => {
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
}

export default TimeTableRow;
