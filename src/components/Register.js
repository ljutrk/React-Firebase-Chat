import React, { Component } from 'react';
import { firebase } from '../firebase/index';

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

    signup = () => {
        firebase.auth.createUserWithEmailAndPassword(this.state.email, this.state.pass)
        // .then(user => {
        //     console.log(user);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        this.setState({
            email: "",
            pass: ""
        })
    }

    render() {
        return (
            <div className="registerDiv">
                <div className="registerForm">
                    <h1>REGISTRATION</h1>
                    <input id="email" onChange={this.inputChange} value={this.state.email} type="text" placeholder="Email" />
                    <input id="pass" onChange={this.inputChange} value={this.state.pass} type="password" placeholder="Password" />
                    <button onClick={this.signup}>register</button>
                </div>
            </div>
        );
    }
}

export default Register;