import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>JustPushIt</h1>
        </div>
        <p className="App-intro">
         <input type="text"></input>
         <button type="submit">Join</button>
        </p>
      </div>
    );
  }
}

export default App;
