import React, { Component } from "react";
import CommitmentForm from "./components/commitmentForm";
import Commitment from "./components/commitment";
import "../../css/commitment.css";

class Commitments extends Component {
  state = {};

  handleFormSubmit = (commitment) => {
    commitment.id = new Date().getTime();
    commitment.key = commitment.id;
    this.props.addCommitment(commitment);
  };

  render() {
    return (
      <div className="commitments-page-container">
        <div className="page-title">Commitments</div>
        <div className="commitment-container">
          {this.props.commitments.map((c) => (
            <Commitment
              commitment={c}
              onDelete={this.props.handleDeleteCommitment}
              key={c.id}
            ></Commitment>
          ))}
        </div>

        <CommitmentForm
          commitments={this.props.commitments}
          handleFormSubmit={this.handleFormSubmit}
        ></CommitmentForm>
      </div>
    );
  }
}

export default Commitments;
