import React, { Component } from "react";

// Components
import RiskSelectorHeader from "./RiskSelectorHeader";
import RiskSelectorButton from "./RiskSelectorButton";

import { riskLevels } from "../RiskData";

export default class RiskSelector extends Component {
  render() {
    return (
      <div className="risk-selector-container">
        <RiskSelectorHeader title="Please Select A Risk Level For Your Investment Portfolio" />
        <div>
          {riskLevels && (
            <ul className="risk-selector-buttons-list">
              {riskLevels.map(level => (
                <li key={level.risk}>
                  <RiskSelectorButton riskLevel={level.risk} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
