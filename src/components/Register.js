import React, { Component } from 'react';
import { firebase } from '../firebase/index';
import { Link } from 'react-router-dom';

class Register extends Component {
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

    signup = (event) => {
        event.preventDefault();
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
            <div className="registerDiv">
                <form className="registerForm" onSubmit={this.signup}>
                    <h1>REGISTRATION</h1>
                    <input id="email" onChange={this.inputChange} value={this.state.email} type="text" placeholder="Email" />
                    <input id="pass" onChange={this.inputChange} value={this.state.pass} type="password" placeholder="Password" />
                    <button type="submit">register</button>
                    <p>Back to <Link to="/"><span className="loginSpan">login!</span></Link></p>
                </form>
            </div>
        );
    }
}

export default Register;