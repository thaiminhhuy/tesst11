import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class Props extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Nguyen"
    };
  }

  render() {
    return (
      <div>
        <h3 className="title">*Props</h3>
        <ClassProps name={this.state.username} />
        <ClassProps name="ABCD" />
        <FunctionProps name={this.state.username} />
      </div>
    );
  }
}
