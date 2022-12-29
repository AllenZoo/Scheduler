import React, { Component } from "react";
import "../../../css/general.css";

function Commitment(props) {
  function onDelete() {
    // TODO: fix props
    //this.props.onDelete(this.props.commitment.id);
  }

  const { commitment } = props;

  return (
    <div className="commitment-display-container">
      <div
        className="commitment-display"
        style={{ backgroundColor: commitment.colour }}
      >
        <div>
          <strong>{commitment.name}</strong>
        </div>
        <div>{commitment.timeType}</div>
        <div>
          {commitment.hours} hours {commitment.minutes} minutes
        </div>
      </div>
      <button className="delete-commitment-button" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default Commitment;
