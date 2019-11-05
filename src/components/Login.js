import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Button() {

    // login = () => {
    //     <Link to="/Main" className="myButton"></Link>
    // }
    return (
        <div className="loginpagecontainer">
        <div className="myButton">
        <h1> Slack clone login</h1>
            <Link to="/Main" >Login</Link>
        </div>
        </div>
    )
}