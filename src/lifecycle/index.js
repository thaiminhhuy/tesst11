import React, { Component } from "react";
// import Child from "./child";
// import Pure from "./pure";

export default class Lifecyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Cybersoft"
    };

    console.log("constructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount");
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);
    // if (nextProps.username) {
    //   return { usernameChild: nextProps.username };
    // }

    return null;
  }

  componentDidMount() {
    // Chạy chính
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps, nextState);
    if (nextState.username === "NguyenDP") {
      return false;
    }
    return true;
  }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");

    return (
      <div>
        <h3 className="title">*Lifecyle</h3>
        <p>Username: {this.state.username}</p>
        {/* Child Component */}
        {/* <Child username={this.state.username} /> */}

        {/* Pure Component */}
        {/* <Pure /> */}
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              username: "NguyenDP"
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
