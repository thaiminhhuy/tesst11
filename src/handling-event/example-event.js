import React, { Component } from "react";

export default class ExampleEvent extends Component {
  isLogin = false;
  username = "Cybersoft";

  //   renderHTML = () => {
  //     if (this.isLogin) {
  //       return <p>Hello {this.username}</p>;
  //     }
  //     return <button className="btn btn-success">Đăng nhập</button>;
  //   };

  handleLogin = () => {
    this.isLogin = true;
  };

  renderHTML = () => {
    return this.isLogin ? (
      <p>Hello {this.username}</p>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Đăng nhập
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">*ExampleEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
