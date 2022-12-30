import React, { Component } from "react";
import { useRef } from "react";
import "../../css/data.css";

function Data(props) {
  const userRef = useRef();

  function handleSaveDB() {
    props.handleSaveDB(userRef.current.value);
  }

  function handleLoadDB() {
    props.handleLoadDB(userRef.current.value);
  }

  function handleSaveLocal() {
    props.handleSaveLocal(userRef.current.value);
  }

  function handleLoadLocal() {
    props.handleLoadLocal(userRef.current.value);
  }

  return (
    <div>
      <div className="data-container">
        <div className="page-title">Save or Load Data</div>
        <div>
          <label htmlFor="user-name-input">User: </label>
          <input id="user-name-input" type="text" ref={userRef}></input>
        </div>

        <button onClick={handleSaveDB}>Save</button>
        <button onClick={handleLoadDB}>Load</button>
        <button onClick={handleSaveLocal}>Save Local</button>
        <button onClick={handleLoadLocal}>Load Local</button>
      </div>
      <div className="data-page-background"></div>
    </div>
  );
}
export default Data;
