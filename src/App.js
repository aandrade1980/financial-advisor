import React from "react";
import "./App.scss";

// Components
import { Header } from "./components/Header";
import RiskSelector from "./components/RiskSelector";

function App() {
  return (
    <div className="App">
      <Header title="Financial Advisor" />
      <RiskSelector />
    </div>
  );
}

export default App;
