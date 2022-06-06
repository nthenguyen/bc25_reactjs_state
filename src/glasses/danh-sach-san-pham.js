import React, { Component } from "react";
import SanPham from "./sanpham";

export default class DanhSachSanPham extends Component {
  renderList = () => {
    const { productList, getDetail, detailProduct } = this.props;
    return productList.map((item, index) => {
      return (
        <SanPham
          key={index}
          sp={item}
          getDetail={getDetail}
          detailProduct={detailProduct}
        ></SanPham>
      );
    });
  };
  render() {
    return (
      <div className="container bg__list">
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}
