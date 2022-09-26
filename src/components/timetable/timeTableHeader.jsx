import React, { Component } from "react";

class TimeTableHeader extends Component {
  render() {
    return (
      <div className="time-table-header">
        {this.props.data.map((date) => {
          return <div>{date.date}</div>;
        })}
      </div>
    );
  }
}

export default TimeTableHeader;
