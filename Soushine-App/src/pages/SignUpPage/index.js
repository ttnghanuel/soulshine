import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./sign-up-page.css";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slice/loadingSlice";
import { handleMessage } from "../../components/Message";

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.data);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(setLoading(true));
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData);
      const resultSignUpApi = await fetch("http://localhost:8080/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const signupData = await resultSignUpApi.json();
      if (signupData.result === true) {
        handleMessage("success", signupData.msg);
        navigate("/login");
      } else {
        handleMessage("error", signupData.msg);
      }
    } catch (error) {
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      {userInfo ? (
        <Navigate to="/" />
      ) : (
        <div className="sign-up-page">
          <Header />
          <main>
            <h5 className="sign-up-page__heading text-dark fw-700 text-uppercase font-cormorant text-center mb-0">
              Sign Up
            </h5>
            <form className="sign-up-page__form mx-auto" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
                name="fullname"
                className="font-open-sans fw-400 d-block mx-auto"
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                className="font-open-sans fw-400 d-block mx-auto"
              />
              <input
                type="number"
                placeholder="Phone"
                required
                name="phone"
                className="font-open-sans fw-400 d-block mx-auto"
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                className="font-open-sans fw-400 d-block mx-auto"
              />
              <button className="sign-up-page__btn-submit btn-ss font-open-sans fw-400 mx-auto">
                Sign Up
              </button>
              <div className="sign-up-page__redirect-signup text-center text-dark">
                Do you have an account?{" "}
                <Link to="/login" className="text-ss fw-400 font-open-sans">
                  Log In
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

export default SignUpPage;
