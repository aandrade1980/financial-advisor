import { riskLevels } from "../../RiskData";

const initialState = {
  riskLevels,
  selectedRiskLevel: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_RISK_LEVEL":
      return {
        ...state,
        selectedRiskLevel: action.payload
      };
    default:
      return state;
  }
}
