import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./payment-page.css";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slice/loadingSlice";
import { handleMessage } from "../../components/Message";
import { setEmptyCart } from "../../redux/slice/cartSlice";

function PaymentPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const totalSalePrice = useSelector((state) => state.cart.totalSalePrice);
  const userInfo = useSelector((state) => state.user.data);
  const [shipFee, setShipFee] = useState(0);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  const handleChangeShipFee = (e) => {
    if (e.target.checked === true) {
      setShipFee(Number(e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(setLoading(true));
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData);
      formData.shippingMethod = Number(formData.shippingMethod);
      const cartFormData = cart.map((item) => {
        return {
          productName: item.productName,
          quantity: item.quantity,
          salePrice: item.salePrice,
          orgPrice: item.orgPrice,
        };
      });
      formData.cart = cartFormData;
      await fetch("http://localhost:8080/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      dispatch(setEmptyCart());
      setIsOrderSuccess(true);
    } catch (error) {
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="payment-page">
      <Header />
      {isOrderSuccess ? (
        <main className="bg-success text-center">
          <img src="/assets/icon/success.svg" alt="" className="py-5 my-5" />
          <h4 className="text-uppercase font-cormorant text-white text-center fw-300">thank you</h4>
          <h2 className="text-uppercase text-white font-cormorant pt-3 mb-0 pb-5">
            your order placed successfully
          </h2>
        </main>
      ) : (
        <main>
          <h5 className="payment-page__heading text-ss fw-700 font-cormorant text-center mb-0">
            CHECKOUT Information
          </h5>
          <div className="container mb-5">
            <div className="row gx-5">
              <div className="col-12 col-lg-6">
                <form className="payment-page__form card border-0" onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="text-ss fw-700 font-cormorant">Contact</h6>
                    {!userInfo && (
                      <p className="font-open-sans fw-400">
                        Have an account?{" "}
                        <Link to="/login" className="text-dark">
                          Log in
                        </Link>
                      </p>
                    )}
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    defaultValue={userInfo?.email}
                  />
                  <h6 className="text-ss fw-700 font-cormorant">Delivery</h6>
                  <input
                    type="text"
                    className="flex-grow-1"
                    placeholder="Full Name"
                    required
                    name="fullname"
                    defaultValue={userInfo?.fullname}
                  />
                  <input
                    type="text"
                    className="flex-grow-1"
                    placeholder="Address"
                    required
                    name="address"
                  />
                  <input
                    type="text"
                    className="flex-grow-1"
                    placeholder="Phone"
                    required
                    name="phone"
                    defaultValue={userInfo?.phone}
                  />
                  <h6 className="text-ss fw-700 font-cormorant">Note</h6>
                  <textarea name="note" placeholder="Note" rows={5} />
                  <h6 className="text-ss fw-700 font-cormorant">Shipping Method</h6>
                  <div className="payment-page__form__radio-group d-flex align-items-center ">
                    <input
                      type="radio"
                      name="shippingMethod"
                      required
                      id="shipping-method-1"
                      value={20}
                      onChange={handleChangeShipFee}
                    />
                    <label
                      htmlFor="shipping-method-1"
                      className="d-flex justify-content-between flex-grow-1"
                    >
                      <span className="text-black-50">Standard Shipping - Get it in 2-5 days</span>
                      <span>&#36;20</span>
                    </label>
                  </div>
                  <div className="payment-page__form__radio-group d-flex align-items-center ">
                    <input
                      type="radio"
                      name="shippingMethod"
                      required
                      id="shipping-method-2"
                      value={60}
                      onChange={handleChangeShipFee}
                    />
                    <label
                      htmlFor="shipping-method-2"
                      className="d-flex justify-content-between flex-grow-1"
                    >
                      <span className="text-black-50">
                        Express Shipping - (Avaliable in HCM city)
                      </span>
                      <span>&#36;60</span>
                    </label>
                  </div>
                  <h6 className="text-ss fw-700 font-cormorant">Payment Method</h6>
                  <div className="payment-page__form__radio-group d-flex align-items-center mb-0">
                    <input
                      type="radio"
                      name="paymentMethod"
                      required
                      id="payment-method-1"
                      value="COD"
                    />
                    <label htmlFor="payment-method-1" className="flex-grow-1">
                      Cash on delivery (COD)
                    </label>
                  </div>
                  <div className="payment-page__form__note text-center font-open-sans fw-400">
                    <p className="mb-0 font-open-sans fw-400">
                      Please check your order details carefully. Due to a high volume of orders and
                      time constraints in packaging, Soulshine will ship without confirmation calls.
                    </p>
                    <p className="mb-0 font-open-sans fw-400">
                      Ensure you or the recipient receives the items within 2-4 days for standard
                      delivery or on the same day for express delivery in Ho Chi Minh City. For any
                      changes or assistance, contact us on Facebook. Thank you!
                    </p>
                  </div>
                  <div className="payment-page__form__radio-group d-flex align-items-center mb-0">
                    <input
                      type="radio"
                      name="paymentMethod"
                      required
                      id="payment-method-2"
                      value="BANK"
                    />
                    <label htmlFor="payment-method-2" className="flex-grow-1">
                      Bank Transfer
                    </label>
                  </div>
                  <div className="payment-page__form__note text-center font-open-sans fw-400">
                    <p className="mb-0 font-open-sans fw-400">
                      Viet Capital Bank (Viet Capital Bank)
                    </p>
                    <p className="mb-0 font-open-sans fw-400">-Account Number: 901704100</p>
                    <p className="mb-0 font-open-sans fw-400">
                      - Account Holder: Soulshine Official
                    </p>
                    <p className="font-open-sans fw-400">
                      - Transfer Note: Name - Order Phone Number
                    </p>
                    <p className="mb-0 font-open-sans fw-400">
                      Once the transfer is complete, Heny will automatically process your order. You
                      can message on Zalo at 0938102922 to receive the tracking code for monitoring
                      if needed. The store will automatically handle your order!
                    </p>
                  </div>
                  <button className="payment-page__form__btn-submit btn-ss text-uppercase rounded-pill font-open-sans fw-700">
                    Pay Now
                  </button>
                </form>
              </div>
              <div className="col-12 col-lg-6 mt-5">
                {cart.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="payment__product-item mb-5 d-flex align-items-center"
                    >
                      <div className="payment__product-item__img p-2 bg-white position-relative">
                        <img src={item.img} alt="" className="w-100 h-100 object-fit-cover" />
                        <span className="d-flex align-items-center justify-content-center text-white rounded-circle p-2">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="mx-5">
                        <h4 className="payment__product-item__name mb-2">{item.productName}</h4>
                        <h6 className="payment__product-item__description mb-0 text-black-50">
                          {item.description}
                        </h6>
                      </div>
                      <div className="ms-auto h3 fon-open-sans fw-400">
                        &#36;{item.salePrice || item.orgPrice}
                      </div>
                    </div>
                  );
                })}
                <div className="border-top border-dark">
                  <p className="my-5 d-flex align-items-center justify-content-between">
                    <span className="fs-4 font-open-sans fw-500">Subotal</span>
                    <span className="fs-4 font-open-sans fw-400">&#36;{totalSalePrice}</span>
                  </p>
                  <p className="my-5 d-flex align-items-center justify-content-between">
                    <span className="fs-4 font-open-sans fw-500">Shipping</span>
                    <span className="fs-4 font-open-sans fw-400">&#36;{shipFee}</span>
                  </p>
                  <p className="my-5 d-flex align-items-center justify-content-between">
                    <span className="fs-2 font-open-sans fw-500">Total</span>
                    <span className="fs-2 font-open-sans fw-600">
                      &#36;{totalSalePrice + shipFee}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default PaymentPage;
