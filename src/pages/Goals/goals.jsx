import React, { Component } from "react";

class Goals extends Component {
  render() {
    return (
      <div>
        {this.props.commitments.map((commitment) => {
          <div>{commitment.name}</div>;
        })}
      </div>
    );
  }
}

export default Goals;
