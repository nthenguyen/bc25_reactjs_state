import React, { Component } from "react";
import data from "./dataGlasses.json";
import DanhSachSanPham from "./danh-sach-san-pham";

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: data,
      detailProduct: data[7],
    };
  }

  handleDetailProduct = (sp) => {
    this.setState({
      detailProduct: sp,
    });
  };

  render() {
    const { productList, detailProduct } = this.state;
    return (
      <div className="bg">
        <h3 className="app_title text-center">TRY GLASSES APP ONLINE</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 my-5 d-flex justify-content-center">
              <div className="card model__img">
                <img className="card-img" src="./glassesImage/model.jpg" />
                <div className="card-img-overlay text-dark d-flex flex-column justify-content-end">
                  <h4 className="card-title">{detailProduct.name}</h4>
                  <h6 className="card-subtitle mb-2">{detailProduct.desc}</h6>
                </div>
              </div>
              <img className="glasses__img" src={detailProduct.url} />
            </div>
            <div className="col-sm-6 my-5 d-flex justify-content-center">
              <div className="card model__img">
                <img className="card-img" src="./glassesImage/model.jpg" />
              </div>
            </div>
          </div>
        </div>

        <DanhSachSanPham
          productList={productList}
          getDetail={this.handleDetailProduct}
          detailProduct={detailProduct}
        />
      </div>
    );
  }
}
