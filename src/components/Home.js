import React, { Component } from 'react';
import ChatRoom from './ChatRoom';
import { firebase } from '../firebase/index';
import Login from './Login';

class Home extends Component {
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
      <div className="homeDiv">
        {this.state.user ? <ChatRoom user={this.state.user} /> : <Login />}
      </div>
    );
  }
}

export default Home;