import React, { Component } from 'react';
import { firebase } from '../firebase/index';
import Header from './partials/Header';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            messages: [],
        }
    }

    componentDidMount() {
        firebase.db.ref('messages/').on('value', snapshot => {
            const messages = snapshot.val();
            if (messages != null) {
                this.setState({ messages });
            }
        });
    }

    inputChangeHandler = (event) => {
        this.setState({ message: event.target.value });

    }

    showMessages = () => {
        return this.state.messages.map(message => {
            return <li className={message.userEmail === this.props.user.email ? "blue" : ""} key={message.id}> <span className="chatNameSpan">{message.userEmail}</span> {`: ${message.message}`} </li>
        })
    }

    addNewMessage = (event) => {
        event.preventDefault();
        const newMessage = {
            id: this.state.messages.length,
            message: this.state.message,
            userEmail: this.props.user.email
        }

        firebase.db.ref('messages/' + newMessage.id).set(newMessage);
        this.setState({ message: "" });
    }


    render() {

        return (
            <div className="chatRoomDiv">
                <Header user={this.props.user.email} />
                <div className="container">
                    <div className="chat">
                        <div className="chat-window">
                            <ul>
                                {this.showMessages()}
                            </ul>
                        </div>
                        <form className="chat-window-footer" onSubmit={this.addNewMessage}>
                            <input onChange={this.inputChangeHandler} value={this.state.message} type="text" placeholder="Your Message" />
                            <button type="submit">+</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;