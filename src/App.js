import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

// Components
import Header from './components/Header';
import RiskSelector from './components/RiskSelector';
import RiskCalculator from './components/RiskCalculator';

const App = () => (
  <Router>
    <div className="App">
      <Header title="Financial Advisor" />
      <Route path="/" exact component={RiskSelector} />
      <Route path="/calculator/" component={RiskCalculator} />
    </div>
  </Router>
);

export default App;
