import React from "react";
import "./App.scss";

// Components
import { Header } from "./components/Header";
import RiskSelector from "./components/RiskSelector";
import RiskTable from "./components/RiskTable";

function App() {
  return (
    <div className="App">
      <Header title="Financial Advisor" />
      <RiskSelector />
      <RiskTable />
    </div>
  );
}

export default App;
