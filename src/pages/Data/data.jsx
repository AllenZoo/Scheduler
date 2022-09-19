import React, { Component } from "react";

class Data extends Component {
  constructor(props) {
    super(props);
    this.userRef = React.createRef();
  }

  handleSave = () => {
    this.props.handleSave(this.userRef.current.value);
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="user-name-input">User: </label>
          <input id="user-name-input" type="text" ref={this.userRef}></input>
        </div>

        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.props.handleLoad}>Load</button>
      </div>
    );
  }
}

export default Data;
