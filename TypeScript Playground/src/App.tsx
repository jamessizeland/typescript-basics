import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function add(n1: number, n2: number, print: boolean) {
    if (print) console.log(n1, n2, n1+n2);
    return n1 + n2;
  }

add(5, 7, true);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
