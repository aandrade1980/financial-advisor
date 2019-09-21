import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Components
import RiskSelectorHeader from "./RiskSelectorHeader";
import RiskSelectorButton from "./RiskSelectorButton";

class RiskSelector extends Component {
  render() {
    const { riskLevels, selectedRiskLevel } = this.props;

    return (
      <div className="risk-selector-container">
        <RiskSelectorHeader title="Please Select A Risk Level For Your Investment Portfolio" />
        <div>
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
