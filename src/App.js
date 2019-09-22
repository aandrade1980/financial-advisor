import React from "react";
import "./App.scss";
import classNames from "classnames";

// Redux
import { connect } from "react-redux";
import { toggleInfoDisplay } from "./redux/actions/financialActions";

// Components
import Header from "./components/Header";
import RiskSelector from "./components/RiskSelector";
import RiskTable from "./components/RiskTable";
import Chart from "./components/Chart";

const App = ({ showTable, toggleInfoDisplay }) => {
  const handleClick = () => toggleInfoDisplay();

  return (
    <div className="App">
      <Header title="Financial Advisor" />
      <RiskSelector />
      <main className="risk-level-info-container">
        {showTable && <RiskTable />}
        {!showTable && <Chart />}
        <button
          className={classNames("risk-selector-button", "toggle-info", {
            donut: showTable,
            table: !showTable
          })}
          type="button"
          onClick={handleClick}
        />
      </main>
    </div>
  );
};

const mapStateToProps = ({ financialReducer: { showTable } }) => ({
  showTable
});

export default connect(
  mapStateToProps,
  { toggleInfoDisplay }
)(App);
