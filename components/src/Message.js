import React, {Component} from "react";

class Message extends Component{
    render (){
        return <h1>Message: {this.props.newMessage}</h1>
    }
}
export default Message