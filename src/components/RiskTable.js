import React from "react";
import classNames from "classnames";

// Redux
import { connect } from "react-redux";
import { setRiskLevel } from "../redux/actions/financialActions";

const RiskTable = ({
  riskLevels = [],
  selectedRiskLevel = 0,
  headerTitles,
  showPorcentaje = false,
  setRiskLevel
}) => {
  const handleRowClick = riskLevel => setRiskLevel(riskLevel);

  const renderTableHeader = () =>
    headerTitles.map((title, index) => <th key={index}>{title}</th>);

  const renderTableData = () =>
    riskLevels.map((level, index) => (
      <tr
        key={index}
        className={classNames({
          active: selectedRiskLevel === level.risk
        })}
        onClick={() => handleRowClick(level.risk)}
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

export default connect(
  null,
  { setRiskLevel }
)(RiskTable);
