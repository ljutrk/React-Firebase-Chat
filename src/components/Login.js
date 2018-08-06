import React, { Component } from 'react';
import { firebase } from '../firebase/index';
import { Link } from 'react-router-dom';

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

    login = (event) => {
        event.preventDefault();
        firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.pass)
        // .then(user => {
        //     console.log(user);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    }

    render() {

        return (
            <div className="loginDiv">
                <form className="loginForm" onSubmit={this.login}>
                    <h1>WELCOME!</h1>
                    <input id="email" onChange={this.inputChange} value={this.state.email} type="text" placeholder="Email" />
                    <input id="pass" onChange={this.inputChange} value={this.state.pass} type="password" placeholder="Password" />
                    <button type="submit">log in</button>
                    <p>Don't have an account? <Link to="/register"><span className="signupSpan">Sign up!</span></Link></p>
                </form>
            </div>
        );
    }
}

export default Login;