import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./login-page.css";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slice/loadingSlice";
import { setUser } from "../../redux/slice/userSlice";
import { handleMessage } from "../../components/Message";

function LoginPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(setLoading(true));
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData);
      const resultLoginApi = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const loginData = await resultLoginApi.json();
      if (loginData.result === true) {
        handleMessage("success", loginData.msg);
        dispatch(setUser(loginData.userInfo));
        navigate(-1);
      } else {
        handleMessage("error", loginData.msg);
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
        <div className="login-page">
          <Header />
          <main>
            <h5 className="login-page__heading text-dark fw-700 text-uppercase font-cormorant text-center mb-0">
              Log in
            </h5>
            <form className="login-page__form mx-auto" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                className="font-open-sans fw-400 d-block mx-auto"
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                className="font-open-sans fw-400 d-block mx-auto"
              />
              <div className="text-end">
                <Link
                  to="/forgot-password"
                  className="login-page__forgot-password text-ss d-inline-block text-end fw-400 font-open-sans"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="login-page__btn-submit btn-ss font-open-sans fw-400 mx-auto">
                Log In
              </button>
              <div className="login-page__redirect-signup text-center text-dark">
                Don't you have an account?{" "}
                <Link to="/signup" className="text-ss fw-400 font-open-sans">
                  Sign up
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

export default LoginPage;
