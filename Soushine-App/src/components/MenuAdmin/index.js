import React from "react";
import { Link, useLocation } from "react-router-dom";

function MenuAdmin() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="menu">
      <ul className="menu__list d-lg-flex align-item-center">
        <li className="menu__item">
          <Link
            to="/admin/product"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/admin/product" && "text-ss"
            }`}
          >
            product
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/admin/order"
            className={`d-flex align-items-center justify-content-lg-center h-100 text-uppercase text-dark text-decoration-none font-open-sans fw-500 text-hover-ss py-4 py-lg-0 ${
              pathname === "/admin/order" && "text-ss"
            }`}
          >
            order
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuAdmin;
