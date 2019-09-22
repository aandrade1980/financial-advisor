import React from "react";
import classNames from "classnames";

// Redux
import { connect } from "react-redux";

const RiskTable = ({ riskLevels, selectedRiskLevel }) => {
  const renderTableHeader = () => {
    const headerTitles = [
      "Risk",
      "Bonds %",
      "Large Cap %",
      "Mid Cap %",
      "Foreing %",
      "Small Cap %"
    ];
    return headerTitles.map((title, index) => <th key={index}>{title}</th>);
  };

  const renderTableData = () =>
    riskLevels.map(level => {
      const { risk, bonds, largeCap, midCap, foreign, smallCap } = level;
      return (
        <tr
          key={risk}
          className={classNames({ active: selectedRiskLevel === risk })}
        >
          <td>{risk}</td>
          <td>{bonds}</td>
          <td>{largeCap}</td>
          <td>{midCap}</td>
          <td>{foreign}</td>
          <td>{smallCap}</td>
        </tr>
      );
    });

  return (
    <div className="risk-level-table-container">
      <table id="risk-level-table">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({
  financialReducer: { riskLevels, selectedRiskLevel }
}) => ({
  riskLevels,
  selectedRiskLevel
});

export default connect(
  mapStateToProps,
  {}
)(RiskTable);
