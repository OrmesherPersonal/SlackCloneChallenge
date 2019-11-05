import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
// import logo from '../Challenges.png'

export default function Nav() {
    return (
       
       <ul className="nav">
 
           {/* <img src={logo}></img> */}
  
           <li>
               <Link to="/">=</Link>
           </li>
           <p># Random</p>
           <li>
               <Link to="/counter">search</Link>
           </li>
           <li>
               <Link to="/calculator">|</Link>
           </li>
           
       </ul>
     
    )
}
