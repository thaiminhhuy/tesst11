import React, { Component } from "react";

export default class ListKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [
        { id: 1, name: "Iphone X", price: 1000 },
        { id: 2, name: "Samsung", price: 1000 },
        { id: 3, name: "HTC", price: 1000 }
      ]
    };
  }

  renderTable = () => {
    return this.state.listProducts.map(product => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="title">*ListKey</h3>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>price</td>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
