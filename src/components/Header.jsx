import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="" className="logo" />
      </header>
    </>
  );
};

export default Header;
