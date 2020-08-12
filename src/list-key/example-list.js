import React, { Component } from "react";
import data from "./data.json";

export default class ExampleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listMovie: data
    };
  }

  renderHTML = () => {
    return this.state.listMovie.map(movie => {
      return (
        <div className="col-sm-4" key={movie.maPhim}>
          <div className="card">
            <div className="card-body">
              <img src={movie.hinhAnh} alt="" />
            </div>
            <div className="card-footer">
              <h3>{movie.tenPhim}</h3>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="title">ExampleList</h3>
        <div className="container">
          <div className="row">{this.renderHTML()}</div>
        </div>
      </div>
    );
  }
}
