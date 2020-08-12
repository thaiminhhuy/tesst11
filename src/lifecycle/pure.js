import React, { Component, PureComponent } from "react";

export default class Pure extends PureComponent {
  render() {
    console.log("render - Pure");
    return (
      <div>
        <h3>Pure component</h3>
      </div>
    );
  }
}
