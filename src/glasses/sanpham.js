import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { sp, getDetail, detailProduct } = this.props;
    return (
      <div className="col-sm-2">
        <div className="card">
          <img
            className="card-img-top"
            src={sp.url}
            onClick={() => {
              getDetail(sp);
            }}
            style={{
              border: sp.url === detailProduct.url ? "2px solid red" : "",
            }}
          />
        </div>
      </div>
    );
  }
}
