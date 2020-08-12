import React, { Component } from "react";

export default class RenderingElemets extends Component {
  username = "Nguyen";
  lop = "FE35";

  renderInfo = () => {
    return (
      <p>
        Username: {this.username} - lop: {this.lop}
      </p>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">*RenderingElemets</h3>
        <p>
          Username: {this.username} - lop: {this.lop}
        </p>
        {this.renderInfo()}
      </div>
    );
  }
}
