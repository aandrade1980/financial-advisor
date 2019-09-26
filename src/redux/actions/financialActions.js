export const setRiskLevel = level => dispatch =>
  dispatch({
    type: "SET_RISK_LEVEL",
    payload: level
  });

export const toggleInfoDisplay = () => dispatch =>
  dispatch({
    type: "SET_SHOW_TABLE"
  });
