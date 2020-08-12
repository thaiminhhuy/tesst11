import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../redux/action";

class UserItem extends Component {
  render() {
    let { user } = this.props;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            onClick={() => {
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteUser(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: user => {
      dispatch(action.actDeleteUser(user));
    },
    editUser: user => {
      dispatch(action.actEditUser(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
