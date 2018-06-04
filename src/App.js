import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; // imports css stylings
import Game from './tic'; // imports Tic Tac Toe Game



class App extends Component {
  render() {
      return <div className="App">

          <div>
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Welcome to React</h1>
              </header>
          </div>

          <div>
              <p className="App-intro">
                  Connection Status:
              </p>
          </div>

          <div>
              <Game />
          </div>

      </div>;
  }
}

export default App;