import React from "react";
import { Donut } from "britecharts-react";

// Redux
import { connect } from "react-redux";

const Chart = ({ currentLevelData }) => {
  const chartData = [
    {
      quantity: (currentLevelData && currentLevelData.bonds) || 20,
      percentage: (currentLevelData && currentLevelData.bonds) || 20,
      name: "Bonds",
      id: 1
    },
    {
      quantity: (currentLevelData && currentLevelData.largeCap) || 20,
      percentage: (currentLevelData && currentLevelData.largeCap) || 20,
      name: "Large Cap",
      id: 2
    },
    {
      quantity: (currentLevelData && currentLevelData.midCap) || 20,
      percentage: (currentLevelData && currentLevelData.midCap) || 20,
      name: "Mid Cap",
      id: 3
    },
    {
      quantity: (currentLevelData && currentLevelData.foreign) || 20,
      percentage: (currentLevelData && currentLevelData.foreign) || 20,
      name: "Foreign",
      id: 4
    },
    {
      quantity: (currentLevelData && currentLevelData.smallCap) || 20,
      percentage: (currentLevelData && currentLevelData.smallCap) || 20,
      name: "Small Cap",
      id: 5
    }
  ];

  return (
    <div className="risk-level-chart-container">
      <Donut
        data={chartData}
        width={400}
        height={400}
        externalRadius={400 / 2.5}
        internalRadius={400 / 5}
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
