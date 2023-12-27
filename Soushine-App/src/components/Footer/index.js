import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const userInfo = useSelector((state) => state.user.data);
  return (
    <footer className="footer text-white">
      <div className="footer__top">
        <div className="container">
          <div className="row gx-5">
            <div className="col-12 py-4 py-md-0 col-md-4 col-lg-3">
              <img src="/assets/image/logo-white.svg" style={{ maxWidth: "100%" }} alt="" />
            </div>
            <div className="col-3 d-none d-lg-block">
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/discover-quiz"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                  >
                    discover quiz
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 py-4 py-md-0 col-md-4 col-lg-3">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61552443699740"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#tiktok"
                    className="text-uppercase text-white text-decoration-none font-cormorant fw-400"
                  >
                    tiktok
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 py-4 py-md-0 col-md-4 col-lg-3 footer__top__signup">
              <p className="mb-0 fw-600 font-cormorant">
                Be the first to know about new products, promotions & more.
              </p>
              {!userInfo && (
                <Link
                  to="/signup"
                  className="btn-outline-ss rounded-pill text-uppercase font-cormorant fw-500 text-decoration-none"
                >
                  Sign up
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 font-zilla fw-400">© 2022 SoulShine. All right reserved.</p>
            <p className="mb-0 font-zilla fw-400">Design Made By SoulShine Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
