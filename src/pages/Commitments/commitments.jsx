import React, { Component } from "react";
import CommitmentForm from "./components/commitmentForm";
import Commitment from "./components/commitment";
import "../../css/commitment.css";
import styled from "styled-components";

const CommitmentPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 200;
`;
const CommitmentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  column-gap: 20px;
`;

const CommitmentPageBackground = styled.div`
  position: fixed;
  background: #134e5e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #71b280,
    #134e5e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #71b280,
    #134e5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  top: 70px;
  bottom: 0px;
  right: 0;
  left: 0;
  z-index: 100;
`;

function Commitments(props) {
  function handleFormSubmit(commitment) {
    commitment.id = new Date().getTime();
    commitment.key = commitment.id;
    props.addCommitment(commitment);
  }

  return (
    <div>
      <CommitmentPageContainer>
        <div className="page-title">Commitments</div>
        <CommitmentContainer>
          {props.commitments.map((c) => (
            <Commitment
              commitment={c}
              onDelete={props.handleDeleteCommitment}
              key={c.id}
            ></Commitment>
          ))}
        </CommitmentContainer>

        <CommitmentForm
          commitments={props.commitments}
          handleFormSubmit={handleFormSubmit}
        ></CommitmentForm>
      </CommitmentPageContainer>
      <CommitmentPageBackground />
    </div>
  );
}

export default Commitments;
