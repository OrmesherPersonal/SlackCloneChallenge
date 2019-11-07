import React, {Component} from "react";
import MessageList from './MessageList';
import '../styling/messages.css'
// import {FaRegSmile} from 'react-icons/fa';
// import {TiAt} from 'react-icons/ti';
// import {TiCamera} from 'react-icons/ti';
// import {TiImage} from 'react-icons/ti';
// import {TiAttachment} from 'react-icons/ti';
// import {TiArrowRightThick} from 'react-icons/ti';


class Messages extends Component {
  
  state= {
    value: "",
    userMessage: []
  }

  addMessage = () => {
    this.setState({
    userMessage: [...this.state.userMessage, this.state.value],
    value: ""
    })
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    
    const listMessages = this.state.userMessage.map((message, i) => <li key={i}>{message}</li>)

    return (

      <div>
        <div className ="messagelisting">
          <MessageList  list={listMessages} name={this.state.name}/>
        </div>
        <div className= "messagebox">
        <textarea className = "textbox" type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick = {this.addMessage}>Send</button>
        </div>
      </div>
    );
  }
  }
  

export default Messages;