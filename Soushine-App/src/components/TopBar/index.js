import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Drawer } from "antd";
import { setCartQuantity } from "../../redux/slice/cartSlice";

function Topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.data);
  const totalSalePrice = useSelector((state) => state.cart.totalSalePrice);
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const [isOpenCartDrawer, setIsOpenCartDrawer] = useState(false);
  const userInfo = useSelector((state) => state.user.data);

  const handleSetCartQuantity = (id, quantity) => {
    dispatch(setCartQuantity({ id, quantity }));
  };
  return (
    <div className="topbar d-flex align-items-center">
      {/* <button className="topbar__search-btn border-0 p-0 bg-transparent">
        <img src="/assets/icon/search.svg" alt="" className="img-hover-ss" />
      </button>
      <button className="topbar__user-btn border-0 p-0 bg-transparent">
        <img src="/assets/icon/user.svg" alt="" className="img-hover-ss" />
      </button> */}
      <button
        className="topbar__cart-btn border-0 p-0 bg-transparent"
        onClick={() => (cart.length > 0 ? setIsOpenCartDrawer(true) : navigate("/shop"))}
      >
        {cartQuantity > 0 && (
          <div className="topbar__cart-btn__quantity bg-ss text-white rounded-circle">
            {cartQuantity}
          </div>
        )}
        <img src="/assets/icon/cart.svg" alt="" className="img-hover-ss" />
      </button>
      {!userInfo && (
        <Link
          to="/login"
          className="topbar__login-btn btn-outline-ss rounded-pill font-open-sans text-uppercase fw-500 text-decoration-none d-none d-md-inline-block"
        >
          Log in
        </Link>
      )}

      {/* Cart Drawer */}
      <Drawer
        title={<span className="text-ss">Your cart</span>}
        placement="right"
        onClose={() => setIsOpenCartDrawer(false)}
        open={isOpenCartDrawer}
      >
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
              <div>
                <div className="checkout-page__product-item__text">
                  <h6 className="mb-0 text-dark fw-700 font-cormorant">{item.productName}</h6>
                  <p className="mb-0 text-dark fw-400 font-cormorant">{item.summary}</p>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="checkout-page__product-item__quantity rounded-pill d-flex align-items-center mx-0">
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
                  <div className="checkout-page__product-item__price d-flex align-items-start ms-auto">
                    <p className="checkout-page__product-item__price--active mb-0 text-dark fw-400 font-cormorant">
                      &#36;{item.salePrice * item.quantity || item.orgPrice * item.quantity}
                    </p>
                    {item.salePrice && (
                      <p className="mb-0 text-black-50 fw-400 font-cormorant text-decoration-line-through">
                        &#36;{item.orgPrice * item.quantity}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-between mt-5 border-bottom pb-2">
          <h3 className="mb-0 font-open-sans fw-500">SubTotal</h3>
          <h3 className="mb-0 font-open-sans fw-500">&#36;{totalSalePrice}</h3>
        </div>
        <p className="fs-6 font-open-sans fw-400 pt-2">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
        <div className="d-flex justify-content-around gap-4 mt-5">
          <Link to="/checkout" className="btn btn-outline-ss rounded-pill w-50">
            <p className="mb-0 fs-3">Discover cart</p>
          </Link>
          <Link to="/payment" className="btn btn-ss rounded-pill w-50">
            <p className="mb-0 fs-3">Checkout</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}

export default Topbar;
