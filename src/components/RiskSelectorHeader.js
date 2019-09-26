import React from "react";

const RiskSelectorHeader = ({ title }) => {
  return (
    <div className="risk-selector-header">
      <h2 className="risk-selector-header-title">{title}</h2>
      <div className="risk-selector-header-labels">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
};

export default RiskSelectorHeader;
