import React, { Component } from 'react';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    inputChangeHandler = (event) => {
        this.setState({ message: event.target.value });

    }

    render() {
        console.log(this.state.message);
        
        return (
            <div className="ChatRoom">
                <input onChange={this.inputChangeHandler} value={this.state.message} type="text" placeholder="Your Message" />
            </div>
        );
    }
}

export default ChatRoom;