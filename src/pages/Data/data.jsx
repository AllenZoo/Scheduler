import React, { Component } from "react";
import { useRef } from "react";
import "../../css/data.css";

function Data(props) {
  const userRef = useRef();

  function handleSave() {
    this.props.handleSave(userRef.current.value);
  }

  function handleLoad() {
    this.props.handleLoad(userRef.current.value);
  }

  return (
    <div>
      <div className="data-container">
        <div className="page-title">Save or Load Data</div>
        <div>
          <label htmlFor="user-name-input">User: </label>
          <input id="user-name-input" type="text" ref={userRef}></input>
        </div>

        <button onClick={handleSave}>Save</button>
        <button onClick={handleLoad}>Load</button>
      </div>
      <div className="data-page-background"></div>
    </div>
  );
}
export default Data;
