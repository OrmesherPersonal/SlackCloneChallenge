import React from "react";


function  MessageList (props) {

const newText = props.list
    console.log(newText)
    
    return(<div>
        <h1>{props.list}</h1>
    </div>);
}


export default MessageList