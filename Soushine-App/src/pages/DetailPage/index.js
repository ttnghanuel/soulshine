import React, { useEffect, useState } from "react";
import "./detail-page.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailInfo from "../../components/ProductDetailInfo";
import ProductCard from "../../components/ProductCard";
import { feedbackList } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slice/loadingSlice";
import { handleMessage } from "../../components/Message";

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList.data);
  const [productDetail, setProductDetail] = useState();
  const navigate = useNavigate();
  const ortherProductList = productList.filter((item) => item.id !== +id);

  const handleGetProductDetail = async (productId) => {
    try {
      dispatch(setLoading(true));
      const resultGetProductDetailApi = await fetch(`http://localhost:8080/product/${productId}`);
      const data = await resultGetProductDetailApi.json();
      setProductDetail(data);
    } catch (error) {
      navigate("/shop");
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (id) {
      handleGetProductDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="detail-page">
      <Header />
      {productDetail && (
        <>
          <div className="detail-page__container container">
            <h6 className="detail-page__heading text-ss font-cormorant fw-700 mb-0">
              Shop / Candle
            </h6>
            <div className="row detail-page__product-info gx-5">
              <div className="col-12 col-lg-6">
                <Gallery imgList={productDetail.imgList} />
              </div>
              <div className="col-12 col-lg-6">
                <ProductDetailInfo productDetail={productDetail} />
              </div>
            </div>
          </div>
          <div className="detail-page__message">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p className="mb-0 py-5 py-lg-0 text-white fw-700 font-cormorant h-100 d-flex align-items-center">
                    Cinnamon-scented candles are the perfect choice to create a warm and inviting
                    atmosphere in your home. Their delightful fragrance, with its sweet and spicy
                    notes, is particularly comforting during the holiday season.{" "}
                  </p>
                </div>
                <div className="col-12 col-lg-6 position-relative">
                  <div className="detail-page__message__images">
                    <img
                      src="https://i.pinimg.com/originals/ec/d4/ce/ecd4ce216d8640234a7befe13066a824.png"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/originals/92/86/95/9286958c6acbf495cb0fb5be60324f53.png"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/originals/53/19/9c/53199c654924c2b1c18faec7b14cafdc.png"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/originals/9d/a1/cc/9da1ccbcc90fbebb24381ec6e794865b.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-page__criteria container">
            <h6 className="text-dark font-cormorant fw-700 text-center text-uppercase">
              Original Phrasing, High-Grade Ingredients
            </h6>
            <div className="detail-page__criteria__list d-flex justify-content-center flex-wrap">
              <div className="detail-page__criteria__item">
                <div className="bg-white rounded-circle">
                  <img src="/assets/image/introduction-benefit-1.svg" className="w-50" alt="" />
                </div>
                <p className="text-center font-cormorant text-dark fw-600">Vegan ingredients</p>
              </div>
              <div className="detail-page__criteria__item">
                <div className="bg-white rounded-circle">
                  <img src="/assets/image/introduction-benefit-2.svg" className="w-50" alt="" />
                </div>
                <p className="text-center font-cormorant text-dark fw-600">Variety of scents</p>
              </div>
              <div className="detail-page__criteria__item">
                <div className="bg-white rounded-circle">
                  <img src="/assets/image/introduction-benefit-3.svg" className="w-50" alt="" />
                </div>
                <p className="text-center font-cormorant text-dark fw-600">Beautiful designs</p>
              </div>
              <div className="detail-page__criteria__item">
                <div className="bg-white rounded-circle">
                  <img src="/assets/image/introduction-benefit-4.svg" className="w-50" alt="" />
                </div>
                <p className="text-center font-cormorant text-dark fw-600">Affordable price</p>
              </div>
              <div className="detail-page__criteria__item">
                <div className="bg-white rounded-circle">
                  <img src="/assets/image/introduction-benefit-5.svg" className="w-50" alt="" />
                </div>
                <p className="text-center font-cormorant text-dark fw-600">Cruelty-Free Products</p>
              </div>
            </div>
          </div>
          <div className="detail-page__feedback bg-white">
            <div className="container">
              <h6 className="text-dark text-uppercase text-center fw-700 font-cormorant">
                Reviews
              </h6>
              <div className="row g-0">
                <div className="col-12 col-lg-4">
                  <div className="feedback-summary">
                    <div className="feedback-summary__top">
                      <h6 className="text-dark text-center fw-700 font-open-sans mb-0">5</h6>
                      <div className="d-flex justify-content-center">
                        <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={48} />
                        <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={48} />
                        <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={48} />
                        <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={48} />
                        <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={48} />
                      </div>
                      <p className="mb-0 text-dark text-center font-open-sans fw-700">3 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="detail-page__feedback__list">
                    {feedbackList.map((item, index) => {
                      return (
                        <div key={index} className="detail-page__feedback__item">
                          <div className="feedback">
                            <div className="d-flex align-items-center jsutify-conntennt-between">
                              <img
                                src={item.avatar}
                                className="feedback__avatar rounded-circle"
                                alt=""
                              />
                              <div className="flex-grow-1 d-flex align-items-start justify-content-between">
                                <div>
                                  <p className="feedback__name text-dark fw-700 font-cormorant">
                                    {item.name}
                                  </p>
                                  <div>
                                    <img
                                      src="/assets/icon/star-fill.svg"
                                      className="me-2"
                                      alt=""
                                      width={20}
                                    />
                                    <img
                                      src="/assets/icon/star-fill.svg"
                                      className="me-2"
                                      alt=""
                                      width={20}
                                    />
                                    <img
                                      src="/assets/icon/star-fill.svg"
                                      className="me-2"
                                      alt=""
                                      width={20}
                                    />
                                    <img
                                      src="/assets/icon/star-fill.svg"
                                      className="me-2"
                                      alt=""
                                      width={20}
                                    />
                                    <img
                                      src="/assets/icon/star-fill.svg"
                                      className="me-2"
                                      alt=""
                                      width={20}
                                    />
                                  </div>
                                </div>
                                <p className="feedback__time text-dark font-open-sans fw-300 mb-0">
                                  22/06/2023
                                </p>
                              </div>
                            </div>
                            <p className="feedback__title font-cormorant text-dark fw-700">
                              {item.title}
                            </p>
                            <p className="feedback__message font-cormorant text-dark fw-400">
                              {item.message}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-page__other-product container">
            <h6 className="text-dark fw-700 font-cormorant">You may also like</h6>
            <div className="row gx-md-4">
              {ortherProductList.map((item, index) => {
                if (index < 4) {
                  return (
                    <div key={index} className="col-12 col-md-6 col-lg-3">
                      <div className="mx-4">
                        <ProductCard productData={item} />
                      </div>
                    </div>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default DetailPage;
