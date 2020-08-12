import React, { Component } from "react";
import Product from "./product";
import data from "./data.json";

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0]
    };
  }

  handleDetail = product => {
    this.setState({
      detailProduct: product
    });
  };

  renderHTML = () => {
    let { listProduct } = this.state;
    return listProduct.map(product => {
      return (
        <Product
          key={product.maSP}
          product={product}
          detailProduct={this.handleDetail}
        />
      );
    });
  };

  render() {
    let { detailProduct } = this.state;

    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>

        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
