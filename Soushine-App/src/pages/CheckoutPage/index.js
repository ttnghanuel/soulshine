import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./checkout-page.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCartQuantity } from "../../redux/slice/cartSlice";

function CheckoutPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const quantity = useSelector((state) => state.cart.quantity);
  const totalOrgPrice = useSelector((state) => state.cart.totalOrgPrice);
  const totalSalePrice = useSelector((state) => state.cart.totalSalePrice);

  const handleSetCartQuantity = (id, quantity) => {
    dispatch(setCartQuantity({ id, quantity }));
  };

  return (
    <div className="checkout-page">
      <Header />
      <div className="checkout-page__heading container">
        <h6 className="text-ss fw-700 font-cormorant mb-0">Home/Your Cart</h6>
        <h5 className="text-ss fw-700 font-cormorant text-uppercase text-center mb-0">
          YOUR CART IS HERE
        </h5>
      </div>
      <div className="bg-white">
        <div className="container">
          <div className="row gx-5">
            <div className="col-12 col-lg-7">
              <div className="checkout-page__left">
                <p className="text-ss fw-400 font-cormorant">
                  You have {quantity} products in your cart
                </p>
                {quantity > 0 ? (
                  <>
                    {cart.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="checkout-page__product-item bg-white d-flex align-items-center"
                        >
                          <div
                            className="checkout-page__product-item__image"
                            style={{
                              background: `url(${item.img}) center center / contain no-repeat`,
                            }}
                          ></div>
                          <div className="d-flex align-items-center justify-content-between flex-grow-1 flex-wrap">
                            <div className="checkout-page__product-item__text pe-5 me-auto">
                              <h6 className="mb-0 text-dark fw-700 font-cormorant text-truncate">
                                {item.productName}
                              </h6>
                              <div className="checkout-page__product-item__price d-flex align-items-start">
                                <p className="checkout-page__product-item__price--active mb-0 text-dark fw-400 font-cormorant">
                                  &#36;
                                  {item.salePrice * item.quantity || item.orgPrice * item.quantity}
                                </p>
                                {item.salePrice && (
                                  <p className="mb-0 text-black-50 fw-400 font-cormorant text-decoration-line-through">
                                    &#36;{item.orgPrice * item.quantity}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="checkout-page__product-item__quantity rounded-pill d-flex align-items-center">
                              <button
                                className="d-flex align-items-center bg-transparent border-0 fw-400"
                                onClick={() => handleSetCartQuantity(item.id, -1)}
                              >
                                -
                              </button>
                              <p className="mb-0 text-dark font-open-sans fw-400 text-center">
                                {item.quantity}
                              </p>
                              <button
                                className="d-flex align-items-center bg-transparent border-0 fw-400"
                                onClick={() => handleSetCartQuantity(item.id, 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="row g-4 checkout-page__note">
                      <div className="col-12">
                        <div className="checkout-page__note__right">
                          <p className="text-dark fw-700 font-cormorant">Exchange/Return Policy</p>
                          <ul>
                            <li className="text-dark font-open-sans fw-400">
                              Items can be exchanged if they do not match the specified.
                            </li>
                            <li className="text-dark font-open-sans fw-400">
                              Type or design in the placed order or as displayed on the.
                            </li>
                            <li className="text-dark font-open-sans fw-400">
                              Website, within 48 hours of receiving the product, in case.
                            </li>
                            <li className="text-dark font-open-sans fw-400">
                              Of missing accessories, gifts, or breakage.
                            </li>
                            <li className="text-dark font-open-sans fw-400">
                              Return is not applicable.
                            </li>
                            <li className="text-dark font-open-sans fw-400">
                              Exchange/return is not applicable for sale items.
                            </li>
                            <li className="text-dark font-open-sans fw-400">
                              Please make a note if you require us to tie a ribbon for.
                            </li>
                            <li className="text-dark font-open-sans fw-400">Gift wrapping.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to="/shop"
                    className="btn-go-to-shop btn-ss rounded-pill text-decoration-none"
                  >
                    Go to Shop
                  </Link>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="checkout-page__right">
                <Link
                  to="/shop"
                  className="text-dark font-open-sans fw-400 text-end text-decoration-none d-block"
                >
                  Continue Shopping <img src="/assets/icon/chevrons-right.svg" alt="" />
                </Link>
                <div className="checkout-page__summary">
                  <p className="checkout-page__summary__heading mb-0 text-ss fw-400 font-cormorant">
                    Order Information
                  </p>
                  <p className="checkout-page__summary__price mb-0 d-flex text-dark font-open-sans fw-500">
                    <span>SubTotal</span>
                    <p className="mb-0 ms-auto d-flex align-items-start">
                      <span className="checkout-page__summary__price--active">
                        &#36;{totalSalePrice}
                      </span>
                      {totalOrgPrice !== totalSalePrice && (
                        <span className="checkout-page__summary__price--disabled text-black-50 text-decoration-line-through">
                          &#36;{totalOrgPrice}
                        </span>
                      )}
                    </p>
                  </p>
                  <p className="checkout-page__summary__note mb-0 text-dark font-open-sans fw-400">
                    You can enter the discount code at the checkout page.
                  </p>
                  <Link
                    to="/payment"
                    className="text-decoration-none btn-ss rounded-pill text-uppercase mx-auto fw-400 font-cormorant"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
