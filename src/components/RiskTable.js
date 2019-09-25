import React from "react";
import classNames from "classnames";

const RiskTable = ({
  riskLevels = [],
  selectedRiskLevel = 0,
  headerTitles,
  showPorcentaje = false
}) => {
  const renderTableHeader = () =>
    headerTitles.map((title, index) => <th key={index}>{title}</th>);

  const renderTableData = () =>
    riskLevels.map((level, index) => (
      <tr
        key={index}
        className={classNames({
          active: selectedRiskLevel === level.risk
        })}
      >
        {Object.values(level).map((value, index) => (
          <td key={index}>
            {value}
            {showPorcentaje && `%`}
          </td>
        ))}
      </tr>
    ));

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

export default RiskTable;
