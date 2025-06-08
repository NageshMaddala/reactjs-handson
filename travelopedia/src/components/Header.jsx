import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="py-4 pl-4" style={{ borderBottom: "2px solid #777" }}>
      <img
        src={logo}
        alt="logo"
        style={{ height: "35px", verticalAlign: "top" }}
      />
      <span className="h2 pt-4 m-2 text-white-50">Travelopedia</span>
    </div>
  );
}

export default Header;