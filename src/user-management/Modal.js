import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps && nextProps.userEdit) {
  //     this.setState({
  //       id: nextProps.userEdit.id,
  //       username: nextProps.userEdit.username,
  //       name: nextProps.userEdit.name,
  //       email: nextProps.userEdit.email,
  //       phoneNumber: nextProps.userEdit.phoneNumber,
  //       type: nextProps.userEdit.type
  //     });
  //   } else {
  //     this.setState({
  //       id: "",
  //       username: "",
  //       name: "",
  //       email: "",
  //       phoneNumber: "",
  //       type: "USER"
  //     });
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.userEdit && nextProps.userEdit.id !== prevState.id) {
      return {
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type
      };
    }
    return {};
  }

  handleOnChange = event => {
    console.log("handleOnChange");
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  };

  resetForm() {
    console.log("resetForm");
    this.setState({
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "Edit user" : "Add user"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleOnChange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handleOnChange}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnChange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnChange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;