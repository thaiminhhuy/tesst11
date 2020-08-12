import React, { Component } from "react";

export default class HandlingEvent extends Component {
  handleOnclick = () => {
    console.log(123);
  };

  handleOnclickParams = name => {
    console.log(name);
  };

  render() {
    return (
      <div>
        <h3 className="title">*HandlingEvent</h3>
        <button className="btn btn-success" onClick={this.handleOnclick}>
          HandlingEvent
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            this.handleOnclickParams("Nguyen");
          }}
        >
          HandlingEvent Params
        </button>
      </div>
    );
  }
}
