import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TradeExecution from './components/TradeExecution';
import Charts from './components/Charts';
import Home from './pages/Home';
import Login from './pages/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trade" component={TradeExecution} />
        <Route path="/charts" component={Charts} />
      </Routes>
    </Router>
  );
};

export default App;
