import React from 'react';
import Routes from './routes';
import './App.css';
import logo from './assets/logo.svg';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
