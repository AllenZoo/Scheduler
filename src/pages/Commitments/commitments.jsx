import React, { Component } from "react";
import CommitmentForm from "./components/commitmentForm";
import Commitment from "./components/commitment";
import "../../css/commitment.css";

function Commitments(props) {
  function handleFormSubmit(commitment) {
    commitment.id = new Date().getTime();
    commitment.key = commitment.id;
    props.addCommitment(commitment);
  }

  return (
    <div>
      <div className="commitments-page-container">
        <div className="page-title">Commitments</div>
        <div className="commitment-container">
          {props.commitments.map((c) => (
            <Commitment
              commitment={c}
              onDelete={props.handleDeleteCommitment}
              key={c.id}
            ></Commitment>
          ))}
        </div>

        <CommitmentForm
          commitments={props.commitments}
          handleFormSubmit={handleFormSubmit}
        ></CommitmentForm>
      </div>
      <div className="commitment-page-background"></div>
    </div>
  );
}

export default Commitments;
