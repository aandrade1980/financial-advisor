import React from "react";

export const Header = ({ title }) => {
  return (
    <header>
      <img id="top-logo" src="/images/home.ico" alt="Financial Advisor" />
      <h1 className="header-title">{title}</h1>
    </header>
  );
};
