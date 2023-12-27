import React from "react";
import "./menu.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Menu() {
  const location = useLocation();
  const pathname = location.pathname;
  const userInfo = useSelector((state) => state.user.data);

  return (
    <div className="menu">
      <ul className="menu__list d-lg-flex align-item-center">
        <li className="menu__item">
          <Link
            to="/"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/" && "text-ss"
            }`}
          >
            home
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/shop"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/shop" && "text-ss"
            }`}
          >
            shop
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/discover-quiz"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/discover-quiz" && "text-ss"
            }`}
          >
            discover-quiz
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/blog"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/blog" && "text-ss"
            }`}
          >
            blog
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/contact"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/contact" && "text-ss"
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/about"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/about" && "text-ss"
            }`}
          >
            about
          </Link>
        </li>
        {!userInfo && (
          <li className="menu__item">
            <Link
              to="/login"
              className="d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 d-md-none"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
