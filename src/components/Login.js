import './Login.css'
import { Redirect, Route, withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import logo from '../components/logo/logoPic3isFree.png'


class Login extends Component {

    state = {
        username: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.username == 'fiona') {
            console.log("this is fionaaaj")
            this.props.history.push("/main");

        }
        else {
            alert('user does not exist please try again');
        }
    }

    handleChange = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="loginpagecontainer">
                <img className="logoPicture" src={logo}></img>
                    <div className="myButton">
                        <h1> Splack</h1>
                        <input className="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} type="text"></input><br />
                        <button type="submit" >Login</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(Login);