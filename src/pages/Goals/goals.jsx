import React, { Component } from "react";
import "../../css/goal.css";

function Goals(props) {
  return (
    <div>
      <div className="goal-container">
        {props.commitments.map((commitment) => {
          <div>{commitment.name}</div>;
        })}
      </div>
      <div className="goal-page-background"></div>
    </div>
  );
}

export default Goals;
