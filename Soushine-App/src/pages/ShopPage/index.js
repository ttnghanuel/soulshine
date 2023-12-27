import React from "react";
import Header from "../../components/Header";
import "./shop-page.css";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function ShopPage() {
  const productList = useSelector((state) => state.productList.data);

  return (
    <div className="shop-page">
      <Header />
      <div className="shop-page__main container">
        <div className="row gx-5">
          <div className="col-12">
            <div className="d-flex align-items-cener justify-content-between">
              <h6 className="text-uppercase text-ss font-cormorant fw-700">CANDLES</h6>
              <button className="shop-page__sort-btn btn-outline-ss rounded-pill text-dark fw-400 font-cormorant d-flex align-items-center">
                <span className="mb-0">
                  Sorted by:&nbsp;
                  <span className="fw-700">Featured</span>
                </span>
                <img src="/assets/icon/chevron-down.svg" alt="" width={20} />
              </button>
            </div>
            <div className="row g-5">
              {productList.map((item, index) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-sm-0" key={index}>
                    <div className="mx-5 mx-sm-0">
                      <ProductCard productData={item} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
