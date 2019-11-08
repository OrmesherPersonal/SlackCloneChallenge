import React, { Component } from 'react'
import './styles/channelSideBar.css'
import { FiHash } from "react-icons/fi";
import { AiOutlineSlack } from "react-icons/ai";
import { MdHighlightOff} from "react-icons/md";




class ChannelSideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                width: -300

            }
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.closeNav);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.closeNav);
    }

    openNav() {
        const style = { width: 300 };
        this.setState({ style });
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.addEventListener("click", this.closeNav);
    }

    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width: 0 };
        this.setState({ style });
        document.body.style.backgroundColor = "#F3F3F3";
    }

    render() {
        return (
            <div className="navContainer">
                <span style={{ fontSize: 20, cursor: "pointer" }} className="openbtn" onClick={this.openNav}>&#9776;</span>
                <div
                    ref="snav"
                    className="overlay"
                    style={this.state.style}
                >
                    <div className="sidenav-container">
                    <a  id="user" href="/"><AiOutlineSlack className="slackIcon"/> <input className="anInput" placeholder=" Jump to..."></input> </a>
                        <a className="menu-item" id="user" href="/">
                            Channels</a>
                                     
                        <a href="/main"><FiHash className="icon" />
                            Random</a>
      

                        <a href="/main"><FiHash className="icon" />
                            Activity </a>
     

                        <a className="menu-item" href="/main"><FiHash className="icon" />
                            Direct Messages </a>

                            <a className="menu-item" href="/activity">
                            General </a>

                        <a className="menu-item" href="/main"><MdHighlightOff className="icon" />
                            Slackbot </a>
     
     
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                        <div className="list-group">
                            {/*your form component goes here */}
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelSideBar

//source https://stackoverflow.com/questions/42130822/display-a-overlay-when-input-is-clicked-in-react