import React, { Component } from "react";

class DateColumn extends Component {
  render() {
    return (
      <div className="date-container">
        <p>{this.props.data.date}</p>

        {/* <div className="time-block-container">
          {Array.from(this.props.data.plan).map(([key, value]) => (
            <div className="time-block">{value} o</div>
          ))}
        </div> */}

        <div className="time-block-container">
          {Array.from(this.props.data.plan).map(function (map) {
            if (map[1].name === "") {
              return (
                <div key={map[0]} className="time-block-empty">
                  _
                </div>
              );
            } else {
              return (
                <div
                  key={map[0].name}
                  className="time-block"
                  style={{ backgroundColor: map[1].colour }}
                >
                  {map[1].name}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default DateColumn;
