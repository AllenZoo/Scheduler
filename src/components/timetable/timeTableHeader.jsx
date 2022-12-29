import React from "react";
import uniqid from "uniqid";

function TimeTableHeader(props) {
  return (
    <div className="time-table-header">
      {props.data.map((date) => {
        let id = uniqid();
        return (
          <div className="time-table-header-day" key={id}>
            {date.date}
          </div>
        );
      })}
    </div>
  );
}

export default TimeTableHeader;
