import React, { useState } from "react";
import { Drawer } from "antd";
import "./header.css";
import Menu from "../Menu";
import Topbar from "../TopBar";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="header bg-white">
      <div className="header-top bg-ss d-flex align-items-center justify-content-center">
        <h6 className="text-white font-cormorant mb-0 fw-700 text-center">
          Find Your Perfect Scented Companion Here.{" "}
          <Link to="/shop" className="text-white">
            Shop now!
          </Link>
        </h6>
      </div>
      <div className="header-bottom container d-flex align-items-center">
        <button className="btn btn-link d-lg-none" onClick={() => setIsOpenMenu(true)}>
          <img src="/assets/icon/menu.svg" width={24} alt="menu-toggle" />
        </button>
        <img className="header-bottom__logo me-5" src="/assets/image/logo.svg" alt="" />
        <div className="d-none d-lg-block">
          <Menu />
        </div>
        <div className="ms-auto">
          <Topbar />
        </div>
      </div>

      {/* Menu tablet and mobile */}
      <Drawer
        title={<img src="/assets/image/logo.svg" alt="logo" />}
        placement="left"
        onClose={() => setIsOpenMenu(false)}
        open={isOpenMenu}
      >
        <Menu />
      </Drawer>
    </div>
  );
}
