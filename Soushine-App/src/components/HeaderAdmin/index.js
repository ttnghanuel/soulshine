import React, { useState } from "react";
import { Drawer } from "antd";
import MenuAdmin from "../MenuAdmin";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="header bg-white">
      <div className="header-top bg-ss d-flex align-items-center justify-content-center">
        <h6 className="text-white text-uppercase font-cormorant mb-0 fw-700">Admin</h6>
      </div>
      <div className="header-bottom container d-flex align-items-center">
        <button className="btn btn-link d-lg-none" onClick={() => setIsOpenMenu(true)}>
          <img src="/assets/icon/menu.svg" width={24} alt="menu-toggle" />
        </button>
        <img className="header-bottom__logo me-5" src="/assets/image/logo.svg" alt="" />
        <div className="d-none d-lg-block">
          <MenuAdmin />
        </div>
      </div>

      {/* Menu tablet and mobile */}
      <Drawer
        title={<img src="/assets/image/logo.svg" alt="logo" />}
        placement="left"
        onClose={() => setIsOpenMenu(false)}
        open={isOpenMenu}
      >
        <MenuAdmin />
      </Drawer>
    </div>
  );
}
