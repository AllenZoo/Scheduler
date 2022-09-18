import React, { Component } from "react";

class Data extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.props.handleSave}>Save</button>
        <button onClick={this.props.handleLoad}>Load</button>
      </div>
    );
  }
}

export default Data;
