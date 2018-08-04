import React, { Component } from 'react';
import ChatRoom from './ChatRoom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>Hello!</p>
          <ChatRoom />
      </div>
    );
  }
}

export default App;
