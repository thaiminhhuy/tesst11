import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";

export default class LiftingStateUpCart extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg"
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg"
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      detailProduct: this.mangSanPham[0],
      mangGioHang: []
    };
  }

  handleDetailProduct = product => {
    this.setState({
      detailProduct: product
    });
  };

  /**
   * Tìm vị trí
   */
  timViTri = id => {
    return this.state.mangGioHang.findIndex(product => product.maSP === id);
  };

  handleAddCart = product => {
    const sanPham = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      soLuong: 1,
      giaBan: product.giaBan
    };

    /**
     * 0. Tìm vị trí
     * 1. Nếu như SP trong giỏ hàng => Update
     * 2. Ngược lại => Thêm
     */
    let index = this.timViTri(sanPham.maSP);

    let mangGioHang = [...this.state.mangGioHang];

    if (index !== -1) {
      //Update
      mangGioHang[index].soLuong += 1;
    } else {
      //Add
      mangGioHang = [...this.state.mangGioHang, sanPham];
    }

    this.setState({
      mangGioHang
    });
  };

  /**
   * DELETE
   */
  handleDelete = product => {
    let mangGioHang = [...this.state.mangGioHang];

    /**
     * 0. Tim vi tri
     * 1. mang.splice(viTriTimThay, 1)
     */
    let index = this.timViTri(product.maSP);

    if (index !== -1) {
      mangGioHang.splice(index, 1);
    }
    this.setState({
      mangGioHang
    });
  };

  /**
   * Tang Giam SL
   */
  hanleTangGiamSL = (product, status) => {
    /**
     * -- status = true =>  Tăng SL
     * -- status = false =>  Giảm SL
     * 0. Tìm vị trí
     * 1. Kiểm tra nếu status true => Tăng SL
     * 2. Ngược lại => Giảm SL
     */
    let index = this.timViTri(product.maSP);
    let mangGioHang = [...this.state.mangGioHang];

    if (status) {
      //Tăng SL
      mangGioHang[index].soLuong += 1;
    } else {
      // Giảm SL
      if (mangGioHang[index].soLuong > 1) {
        mangGioHang[index].soLuong -= 1;
      }
    }

    this.setState({
      mangGioHang
    });
  };

  /**
   * Tong SL SP
   */
  tongSoLuong = () => {
    /**
     * 0. Duyet mảng giỏ hàng
     * 1. Cộng tích lũy số lượng từng SP trong mảng
     * 2. Trả về tổng số lượng
     */
    // let tong = 0;
    // this.state.mangGioHang.map(item => {
    //   tong += item.soLuong;
    // });
    // return tong;

    return this.state.mangGioHang.reduce((tong, product) => {
      return (tong += product.soLuong);
    }, 0);
  };

  render() {
    let { detailProduct } = this.state;

    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSoLuong()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.mangSanPham}
          detailProduct={this.handleDetailProduct}
          addCart={this.handleAddCart}
        />
        <Modal
          gioHang={this.state.mangGioHang}
          delete={this.handleDelete}
          tangGiamSL={this.hanleTangGiamSL}
        />
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
