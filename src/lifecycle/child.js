import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameChild: ""
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps", nextProps);
  // }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);
    if (nextProps.username) {
      return { usernameChild: nextProps.username };
    }

    return null;
  }

  render() {
    console.log("render - child", this.state);
    return (
      <div>
        <h3>*Child</h3>
        <p>Username: {this.props.username}</p>
      </div>
    );
  }
}
