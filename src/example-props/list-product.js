import React, { Component } from "react";
import Product from "./product";
import data from "./data.json";

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data
    };
  }

  renderHTML = () => {
    let { listProduct } = this.state;
    return listProduct.map(product => {
      return <Product key={product.maSP} product={product} />;
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
