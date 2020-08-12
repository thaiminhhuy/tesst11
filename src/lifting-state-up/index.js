import React, { Component } from "react";
import ListProdict from "./list-product";

export default class LiftingStateUp extends Component {
  render() {
    return (
      <div>
        <h3 className="title">*LiftingStateUp</h3>
        <ListProdict />
      </div>
    );
  }
}
