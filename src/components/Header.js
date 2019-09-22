import React from "react";

const Header = ({ title }) => (
  <header>
    <img id="top-logo" src="/images/home.ico" alt="Financial Advisor" />
    <h1 className="header-title">{title}</h1>
  </header>
);

export default Header;
