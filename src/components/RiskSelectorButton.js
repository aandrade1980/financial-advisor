import React from "react";

const RiskSelectorButton = ({ riskLevel }) => {
  const handleClick = () => {
    console.log("click on risk level => ", riskLevel);
  };
  return (
    <button
      className="risk-selector-button"
      type="button"
      onClick={handleClick}
    >
      {riskLevel}
    </button>
  );
};

export default RiskSelectorButton;
