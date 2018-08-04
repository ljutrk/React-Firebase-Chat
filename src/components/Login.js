import React, { Component } from 'react';
import { firebase } from '../firebase/index';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
    }

    inputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    login = () => {
        firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.pass)
            // .then(user => {
            //     console.log(user);
            // })
            // .catch(error => {
            //     console.log(error);
            // })
    }

    signup = () => {
        firebase.auth.createUserWithEmailAndPassword(this.state.email, this.state.pass)
            // .then(user => {
            //     console.log(user);
            // })
            // .catch(error => {
            //     console.log(error);
            // })
    }

    render() {

        return (
            <div>
                <p>email:</p> <input id="email" onChange={this.inputChange} value={this.state.email} type="text" />
                <p>pass:</p> <input id="pass" onChange={this.inputChange} value={this.state.pass} type="password" />
                <br />
                <button onClick={this.login}>log in</button>
                <button onClick={this.signup}>sign up</button>
            </div>
        );
    }
}

export default Login;