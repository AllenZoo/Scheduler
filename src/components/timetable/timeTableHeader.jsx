import React from "react";

function TimeTableHeader(props) {
  return (
    <div className="time-table-header">
      {props.data.map((date) => {
        return <div className="time-table-header-day">{date.date}</div>;
      })}
    </div>
  );
}

export default TimeTableHeader;
