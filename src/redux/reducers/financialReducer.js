import { riskLevels } from "../../RiskData";

const initialState = {
  riskLevels,
  selectedRiskLevel: 0,
  showTable: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_RISK_LEVEL":
      return {
        ...state,
        selectedRiskLevel: action.payload
      };
    case "SET_SHOW_TABLE":
      return {
        ...state,
        showTable: !state.showTable
      };
    default:
      return state;
  }
}
