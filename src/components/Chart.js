import React from "react";
import { Donut } from "britecharts-react";

// Redux
import { connect } from "react-redux";

const defaultChartData = [
  {
    quantity: 20,
    percentage: 20,
    name: "Bonds",
    id: 1
  },
  {
    quantity: 20,
    percentage: 20,
    name: "Large Cap",
    id: 2
  },
  {
    quantity: 20,
    percentage: 20,
    name: "Mid Cap",
    id: 3
  },
  {
    quantity: 20,
    percentage: 20,
    name: "Foreign",
    id: 4
  },
  {
    quantity: 20,
    percentage: 20,
    name: "Small Cap",
    id: 2
  }
];

const Chart = ({ currentLevelData = defaultChartData }) => {
  const chartData = [
    {
      quantity: currentLevelData.bonds || 20,
      percentage: currentLevelData.bonds || 20,
      name: "Bonds",
      id: 1
    },
    {
      quantity: currentLevelData.largeCap || 20,
      percentage: currentLevelData.largeCap || 20,
      name: "Large Cap",
      id: 2
    },
    {
      quantity: currentLevelData.midCap || 20,
      percentage: currentLevelData.midCap || 20,
      name: "Mid Cap",
      id: 3
    },
    {
      quantity: currentLevelData.foreign || 20,
      percentage: currentLevelData.foreign || 20,
      name: "Foreign",
      id: 4
    },
    {
      quantity: currentLevelData.smallCap || 20,
      percentage: currentLevelData.smallCap || 20,
      name: "Small Cap",
      id: 2
    }
  ];

  return (
    <div className="risk-level-chart-container">
      <Donut
        data={chartData}
        width={500}
        height={500}
        externalRadius={500 / 2.5}
        internalRadius={500 / 5}
      />
    </div>
  );
};

const mapStateToProps = ({
  financialReducer: { riskLevels, selectedRiskLevel }
}) => ({
  currentLevelData: riskLevels.find(level => level.risk === selectedRiskLevel)
});

export default connect(
  mapStateToProps,
  {}
)(Chart);
