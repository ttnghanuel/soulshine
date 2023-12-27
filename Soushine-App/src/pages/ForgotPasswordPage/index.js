import React from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./forgot-password-page.css";
import { useSelector } from "react-redux";

function ForgotPasswordPage() {
  const userInfo = useSelector((state) => state.user.data);

  return (
    <>
      {userInfo ? (
        <Navigate to="/" />
      ) : (
        <div className="forgot-password-page">
          <Header />
          <main>
            <h5 className="forgot-password-page__heading text-dark fw-700 text-uppercase font-cormorant text-center mb-0">
              Forgot Password
            </h5>
            <form className="forgot-password-page__form mx-auto">
              <h1 className="font-cormorant fw-300 text-center">Reset your password</h1>
              <p className="font-open-sans text-center fs-4 fw-300">
                We will send you an email to reset your password
              </p>
              <input
                type="email"
                placeholder="Email"
                required
                className="font-open-sans fw-400 d-block mx-auto"
              />
              <button className="forgot-password-page__btn-submit btn-ss font-open-sans fw-400 mx-auto">
                Submit
              </button>
              <div className="forgot-password-page__redirect-signup text-center text-dark">
                <Link to="/login" className="text-dark fw-400 font-open-sans">
                  Cancel
                </Link>
              </div>
            </form>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default ForgotPasswordPage;
