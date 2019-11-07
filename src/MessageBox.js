import React, {Component} from 'react'
import './MessageBox.css'
import ChatBox from './ChatBox'
import {FaRegSmile} from 'react-icons/fa';
import {TiAt} from 'react-icons/ti';
import {TiCamera} from 'react-icons/ti';
import {TiImage} from 'react-icons/ti';
import {TiAttachment} from 'react-icons/ti';
import {TiArrowRightThick} from 'react-icons/ti';

class MessageBox extends Component {
    render(){
    
        const consolelog = () => {
            console.log("testing")
        }
    return (
        <div className="MessageBox">
            <div className="messageInput"></div>
            <input type="text" placeholder="Message"></input>
                        <div className="Symbol Div">
        <button><FaRegSmile onClick={consolelog}/></button>
       <button><TiAt onClick={consolelog}/></button>
       <button><TiCamera onClick={consolelog}/></button>
       <button><TiImage onClick={consolelog}/></button>
       <button><TiAttachment onClick={consolelog}/></button>
       <button><TiArrowRightThick onClick={consolelog}/></button>
      
            
            </div>
        </div>
    )
}
}
export default MessageBox;