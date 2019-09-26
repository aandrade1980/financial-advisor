import React from "react";
import { withRouter } from "react-router";

const Header = ({ title, history }) => {
  const handleClick = () => history.push("/");

  return (
    <header>
      <img
        id="top-logo"
        src="/images/home.ico"
        alt="Financial Advisor"
        onClick={handleClick}
      />
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default withRouter(Header);
