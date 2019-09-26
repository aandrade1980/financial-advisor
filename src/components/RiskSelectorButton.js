import React from "react";
import classNames from "classnames";

// Redux
import { connect } from "react-redux";
import { setRiskLevel } from "../redux/actions/financialActions";

const RiskSelectorButton = ({ riskLevel, selectedRiskLevel, setRiskLevel }) => {
  const handleClick = () => setRiskLevel(riskLevel);

  return (
    <button
      className={classNames("risk-selector-button", {
        active: riskLevel === selectedRiskLevel
      })}
      type="button"
      onClick={handleClick}
    >
      {riskLevel}
    </button>
  );
};

export default connect(
  null,
  { setRiskLevel }
)(RiskSelectorButton);
