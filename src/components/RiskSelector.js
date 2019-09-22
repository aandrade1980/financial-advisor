import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Components
import RiskSelectorHeader from "./RiskSelectorHeader";
import RiskSelectorButton from "./RiskSelectorButton";
import Button from "./Button";

class RiskSelector extends Component {
  render() {
    const { riskLevels, selectedRiskLevel } = this.props;

    const handleContinue = () => {
      // TODO: Show next screen: 'Personalized Portfolio'
    };

    return (
      <div className="risk-selector-container">
        <RiskSelectorHeader title="Please Select A Risk Level For Your Investment Portfolio" />
        <div style={{ display: "flex" }}>
          {riskLevels && (
            <ul className="risk-selector-buttons-list">
              {riskLevels.map(level => (
                <li key={level.risk}>
                  <RiskSelectorButton
                    riskLevel={level.risk}
                    selectedRiskLevel={selectedRiskLevel}
                  />
                </li>
              ))}
            </ul>
          )}
          <Button
            text="Continue"
            className="risk-selector-button blue-button"
            onClick={handleContinue}
            disabled={selectedRiskLevel === 0}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  financialReducer: { riskLevels, selectedRiskLevel }
}) => ({
  riskLevels,
  selectedRiskLevel
});

export default connect(
  mapStateToProps,
  {}
)(RiskSelector);
