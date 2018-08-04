import React, { Component } from 'react';
import ChatRoom from './ChatRoom';
import { firebase } from '../firebase/index';
import './App.css';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener = () => {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }

    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <ChatRoom user={this.state.user} /> : <Login />}
      </div>
    );
  }
}

export default App;
