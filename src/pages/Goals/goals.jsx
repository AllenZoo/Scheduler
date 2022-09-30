import React, { Component } from "react";
import "../../css/goal.css";

class Goals extends Component {
  render() {
    return (
      <div>
        <div className="goal-container">
          {this.props.commitments.map((commitment) => {
            <div>{commitment.name}</div>;
          })}
        </div>
        <div className="goal-page-background"></div>
      </div>
    );
  }
}

export default Goals;
