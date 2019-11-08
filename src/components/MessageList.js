import React from "react";


function  MessageList (props) {

const newText = props.list
    console.log(newText)
    
    return(<div>
        {props.list}
    </div>);
}


export default MessageList