import React from "react";
import classNames from "classnames";

// Redux
import { connect } from "react-redux";

// Components
import RiskTable from "./RiskTable";
import Button from "./Button";

import { levelInfo } from "../RiskData";

class RiskCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.recommendedUl = React.createRef();
  }

  state = {
    bond: 0,
    largeCap: 0,
    midCap: 0,
    foreing: 0,
    smallCap: 0,
    differenceBond: 0,
    differenceLargeCap: 0,
    differenceMidCap: 0,
    differenceForeing: 0,
    differenceSmallCap: 0,
    newAmountBond: 0,
    newAmountLargeCap: 0,
    newAmountMidCap: 0,
    newAmountForeing: 0,
    newAmountSmallCap: 0
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleRebalance = () => {
    const totalValue =
      parseFloat(this.state.bond) +
      parseFloat(this.state.largeCap) +
      parseFloat(this.state.midCap) +
      parseFloat(this.state.foreing) +
      parseFloat(this.state.smallCap);

    const levelValues = Object.values(this.props.currentLevel).slice(1);

    const levelPercents = levelValues.map(value =>
      value === 0 ? 0 : value / 100
    );

    const newAmounts = levelPercents.map(
      value => Math.floor(100 * (value * totalValue)) / 100
    );

    const differences = [];

    differences.push(Math.round(100 * (newAmounts[0] - this.state.bond)) / 100);
    differences.push(
      Math.round(100 * (newAmounts[1] - this.state.largeCap)) / 100
    );
    differences.push(
      Math.round(100 * (newAmounts[2] - this.state.midCap)) / 100
    );
    differences.push(
      Math.round(100 * (newAmounts[3] - this.state.foreing)) / 100
    );
    differences.push(
      Math.round(100 * (newAmounts[4] - this.state.smallCap)) / 100
    );

    this.setState({
      newAmountBond: newAmounts[0],
      newAmountLargeCap: newAmounts[1],
      newAmountMidCap: newAmounts[2],
      newAmountForeing: newAmounts[3],
      newAmountSmallCap: newAmounts[4],
      differenceBond: differences[0],
      differenceLargeCap: differences[1],
      differenceMidCap: differences[2],
      differenceForeing: differences[3],
      differenceSmallCap: differences[4]
    });

    this.recommendedUl.current.innerHTML = "";

    this.suggestTransaction(differences);
  };

  suggestTransaction = differences => {
    const differencesCopy = [...differences];

    const sortedDifferences = differences.sort((a, b) => a - b);

    const lowestValue = sortedDifferences[0];

    if (lowestValue < 0) {
      const nextPositiveValue = sortedDifferences.find(value => value > 0);

      const lowestValuePosition = differencesCopy.indexOf(lowestValue);
      const positiveValuePosition = differencesCopy.indexOf(nextPositiveValue);

      const negativeValueLabel = levelInfo[lowestValuePosition].label;
      const positiveValueLabel = levelInfo[positiveValuePosition].label;

      if (lowestValue + nextPositiveValue <= 0) {
        differencesCopy[lowestValuePosition] = lowestValue + nextPositiveValue;
        differencesCopy[positiveValuePosition] = 0;

        this.recommendedUl.current.innerHTML += `<li>• Transfer $${Math.round(
          100 * nextPositiveValue
        ) / 100} from ${negativeValueLabel} to ${positiveValueLabel}</li>`;
      } else {
        differencesCopy[lowestValuePosition] = 0;
        differencesCopy[positiveValuePosition] =
          nextPositiveValue + lowestValue;

        this.recommendedUl.current.innerHTML += `<li>• Transfer $${Math.abs(
          Math.round(100 * lowestValue) / 100
        )} from ${negativeValueLabel} to ${positiveValueLabel}</li>`;
      }
    }

    if (
      differencesCopy.some(value => value < 0) &&
      differencesCopy.filter(value => value === 0).length < 5
    ) {
      this.suggestTransaction(differencesCopy);
    }
  };

  render() {
    const { selectedRiskLevel, currentLevel } = this.props;
    const cloneLevel = Object.assign({}, currentLevel);
    cloneLevel && delete cloneLevel.risk;

    const isRebalanceDisabled =
      this.state.bond !== 0 &&
      this.state.largeCap !== 0 &&
      this.state.midCap !== 0 &&
      this.state.foreing !== 0 &&
      this.state.smallCap !== 0 &&
      selectedRiskLevel > 0;

    return (
      <div className="risk-calculator-container">
        <h2 className="risk-calculator-title">Personalized Portfolio</h2>
        <div className="risk-selected-info">Risk Level {selectedRiskLevel}</div>
        <RiskTable
          headerTitles={levelInfo.map(title => title.label)}
          riskLevels={[cloneLevel]}
          showPorcentaje={true}
        />
        <div className="risk-calculator-rebalance-container">
          <h3>Please Enter Your Current Portfolio</h3>
          <Button
            text="Rebalance"
            className="risk-selector-button blue-button"
            onClick={this.handleRebalance}
            disabled={!isRebalanceDisabled}
          />
        </div>
        <div className="risk-calculator-input-container">
          <div className="risk-calculator-input-labels">
            <span>Current Amount</span>
            <span>Difference</span>
            <span>New Amount</span>
            <span>Recommended Transfers</span>
          </div>
          <div className="risk-calculator-main">
            {levelInfo.map((title, index) => (
              <div key={index} className="risk-calculator-main-row">
                <label htmlFor={title.value}>{title.label} $:</label>
                <input
                  type="number"
                  name={title.value}
                  id={title.value}
                  className="risk-calculator-main-input"
                  value={this.state[title.value]}
                  onChange={this.handleChange}
                />
                <input
                  type="number"
                  className={classNames(
                    "risk-calculator-main-input",
                    { red: this.state[title.differenceLabel] < 0 },
                    { green: this.state[title.differenceLabel] >= 0 }
                  )}
                  disabled
                  value={this.state[title.differenceLabel]}
                />
                <input
                  type="number"
                  className="risk-calculator-main-input blue"
                  disabled
                  value={this.state[title.newAmountLabel]}
                />
              </div>
            ))}
            <div className="risk-calculator-transfers">
              <ul ref={this.recommendedUl}></ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  financialReducer: { selectedRiskLevel, riskLevels }
}) => ({
  selectedRiskLevel,
  currentLevel: riskLevels.find(level => level.risk === selectedRiskLevel)
});

export default connect(
  mapStateToProps,
  {}
)(RiskCalculator);
