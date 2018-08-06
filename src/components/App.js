import React, { Component } from 'react';
import ChatRoom from './ChatRoom';
import { firebase } from '../firebase/index';
import './App.css';
import Login from './Login';
import Register from './Register';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;