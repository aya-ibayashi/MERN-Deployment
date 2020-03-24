import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Test from '../src/views/test'
import Dashboard from '../src/views/dashboard'
import CreatePirate from '../src/views/createPirate'
import  PirateInfo from '../src/views/pirateInfo'

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/"/>
        <PirateInfo path="/pirates/:id"/>
        <CreatePirate path="/pirates/new"/>
      </Router>
    </div>
  );
}

export default App;
