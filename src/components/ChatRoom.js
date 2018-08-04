import React, { Component } from 'react';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            messages: [
                { id: 0, message: "message 1"},
                { id: 1, message: "message 2"},
                { id: 2, message: "message 3"},
                { id: 3, message: "message 4"}
            ]
        }
    }

    inputChangeHandler = (event) => {
        this.setState({ message: event.target.value });

    }

    showMessages = () => {
        return this.state.messages.map(message => {
            return <li key={message.id}> {message.message} </li>
        })
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
            </div>
        );
    }
}

export default ChatRoom;