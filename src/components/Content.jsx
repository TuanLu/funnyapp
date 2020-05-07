import React from "react";
import Logo from "../assets/light-logo.png";

const Content = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <img className="header__logo" src={Logo} alt="logo" />
        <span className="heading-title">Ez Bee - All In One Solution</span>
      </div>
      <div className="main">
        <div className="main__sidebar">Sidebar</div>
        <div className="main__content">
					Content
        </div>
      </div>
    </div>
  );
};

export default Content;
