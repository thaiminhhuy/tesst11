import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../redux/action";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={e => {
          this.props.getKeyWord(e.target.value);
        }}
      />
    );
  }
}

const mapDispatchToProp = dispatch => {
  return {
    getKeyWord: keyword => {
      dispatch(action.actKeyword(keyword));
    }
  };
};

export default connect(null, mapDispatchToProp)(Search);
