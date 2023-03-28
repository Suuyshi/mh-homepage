import React from "react";
import logo from "../../assets/images/LOGOWhite_EN.png";
import Weather from "./Weather";
import WhatsappIcon from "../../assets/icons/WhatsappIcon";
import Button from "../Button";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="navbar-component__logo">
        <img src={logo} />
      </div>
      <div className="navbar-component__main-content">
        {/* Weather component */}
        {/* Whatsapp icon */}
        <WhatsappIcon />
        <Button buttonType="light-btn" className="ms-5">
          book now
        </Button>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
