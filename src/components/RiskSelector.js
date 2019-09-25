import React, { Component } from "react";
import classNames from "classnames";

// Redux
import { connect } from "react-redux";
import { toggleInfoDisplay } from "../redux/actions/financialActions";

// Components
import RiskSelectorHeader from "./RiskSelectorHeader";
import RiskSelectorButton from "./RiskSelectorButton";
import RiskTable from "./RiskTable";
import Chart from "./Chart";
import Button from "./Button";

const headerTitles = [
  "Risk",
  "Bonds %",
  "Large Cap %",
  "Mid Cap %",
  "Foreing %",
  "Small Cap %"
];

class RiskSelector extends Component {
  handleClick = () => this.props.toggleInfoDisplay();

  handleContinue = () => this.props.history.push("/calculator");

  render() {
    const { riskLevels, selectedRiskLevel, showTable } = this.props;

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
            onClick={this.handleContinue}
            disabled={selectedRiskLevel === 0}
          />
        </div>
        <main className="risk-level-info-container">
          {showTable && (
            <RiskTable
              headerTitles={headerTitles}
              riskLevels={riskLevels}
              selectedRiskLevel={selectedRiskLevel}
            />
          )}
          {!showTable && <Chart />}
          <button
            className={classNames("risk-selector-button", "toggle-info", {
              donut: showTable,
              table: !showTable
            })}
            type="button"
            onClick={this.handleClick}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({
  financialReducer: { riskLevels, selectedRiskLevel, showTable }
}) => ({
  riskLevels,
  selectedRiskLevel,
  showTable
});

export default connect(
  mapStateToProps,
  { toggleInfoDisplay }
)(RiskSelector);
