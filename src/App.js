import React from 'react';
import logo from './logo.svg';
import Example from './Example'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Hook Demo
        </p>
        <Example />
      </header>
    </div>
  );
}

export default App;
