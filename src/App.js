import React, { Component } from 'react';
import logo1 from './logo1.png';
import './App.css';
import Container from './Container';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo1" />
          <h1 className="App-title">Secret Santa</h1>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
