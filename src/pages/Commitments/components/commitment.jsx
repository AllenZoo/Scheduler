import React, { Component } from "react";
import "../../../css/general.css";

class Commitment extends Component {
  state = {};

  onDelete = () => {
    this.props.onDelete(this.props.commitment.id);
  };

  render() {
    const { commitment } = this.props;

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
        <button className="delete-commitment-button" onClick={this.onDelete}>
          X
        </button>
      </div>
    );
  }
}

export default Commitment;
