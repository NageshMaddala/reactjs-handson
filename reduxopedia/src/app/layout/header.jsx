import React from "react";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div className="pt-3 pl-2">
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 text-white-50" style={{verticalAlign:"top"}}>&nbsp;&nbsp;ReduxOpedia</span>
    </div>
  );
}

export default Header;