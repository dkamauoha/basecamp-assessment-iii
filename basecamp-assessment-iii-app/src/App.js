import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DevMountain WebDev Test App</h1>
        </header>
        <p className="App-intro">
          Get out of my swamp!!
        </p>
        <Child2/>
        <Child1/>
        <Child3/>
      </div>
    );
  }
}

export default App;
