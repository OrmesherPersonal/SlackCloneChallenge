import React, {Component} from 'react'
import MessageBox from './MessageBox'
import MessageList from './MessageList'

class ChatBox extends Component {
    
    render() {

    
    return (
        <div className="chatBox">
            {/* <messageList /> */}
            <MessageBox />
        </div>
        )
    }
}
export default ChatBox;