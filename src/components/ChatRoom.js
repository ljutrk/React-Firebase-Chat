import React, { Component } from 'react';
import { firebase } from '../firebase/index';

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
                this.setState({ messages })
            }
        });
    }

    inputChangeHandler = (event) => {
        this.setState({ message: event.target.value });

    }

    showMessages = () => {
        return this.state.messages.map(message => {
            return <li key={message.id}> {message.message} </li>
        })
    }

    addNewMessage = () => {
        const newMessage = {
            id: this.state.messages.length,
            message: this.state.message
        }

        firebase.db.ref('messages/' + newMessage.id).set(newMessage);
        this.setState({ message: "" });
    }

    render() {

        return (
            <div className="ChatRoom">
                <div className="chat-window">
                    <ul>
                        {this.showMessages()}
                    </ul>
                </div>
                <input onChange={this.inputChangeHandler} value={this.state.message} type="text" placeholder="Your Message" />
                <button onClick={this.addNewMessage}>add message</button>
            </div>
        );
    }
}

export default ChatRoom;