import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: ""
      },
      errors: {
        manv: "",
        tennv: "",
        email: ""
      },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false
    };
  }

  handleOnchange = event => {
    let { name, value } = event.target;

    this.setState(
      {
        values: { ...this.state.values, [name]: value }
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleErrors = event => {
    let { name, value } = event.target;
    console.log(name, value);
    let message = value === "" ? name + " Khong duoc rong" : "";
    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = message !== "" ? false : true;
        if (value !== "" && value.length < 4) {
          manvValid = false;
          message = "Do dai phai lon hon 3 ky tu";
        }
        break;
      case "tennv":
        tennvValid = message !== "" ? false : true;
        break;
      case "email":
        emailValid = message !== "" ? false : true;
        if (
          value !== "" &&
          !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
          emailValid = false;
          message = "Email k dung dinh dang!";
        }
        break;
      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        manvValid,
        tennvValid,
        emailValid
      },
      () => {
        console.log(this.state);
        this.validationForm();
      }
    );
  };

  validationForm = () => {
    let { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Mã NV</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.manv !== "" ? (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Tên NV</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.tennv !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.tennv}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.email !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
