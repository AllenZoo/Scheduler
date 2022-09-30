import React, { Component } from "react";
import "../../css/data.css";

class Data extends Component {
  constructor(props) {
    super(props);
    this.userRef = React.createRef();
  }

  handleSave = () => {
    this.props.handleSave(this.userRef.current.value);
  };

  handleLoad = () => {
    this.props.handleLoad(this.userRef.current.value);
  };

  render() {
    return (
      <div>
        <div className="data-container">
          <div className="page-title">Save or Load Data</div>
          <div>
            <label htmlFor="user-name-input">User: </label>
            <input id="user-name-input" type="text" ref={this.userRef}></input>
          </div>

          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.handleLoad}>Load</button>
        </div>
        <div className="data-page-background"></div>
      </div>
    );
  }
}

export default Data;
