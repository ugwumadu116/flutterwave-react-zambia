import React from 'react';
import './App.css';
import UsingComp from './UsingComponent'

function App() {
  const k = process.env.React
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <UsingComp />
       
      </header>
    </div>
  );
}

export default App;
