import React from "react";
import { slide as Menu } from "react-burger-menu";
import { GoMention } from "react-icons/go";
import "./styles/user-left.css";


export default props => {
  return (
    <Menu className="burger-button2">
      <a className="menu-item" id="user" href="/"> 
       Channels
      </a>


      <a className="menu-item"  href="/activity"><GoMention className="icon"/>
        Random
      </a>

      <a className="menu-item"  href="/activity"><GoMention className="icon"/>
        Activity
      </a>

      <a className="menu-item" href="/activity"><GoMention className="icon"/>
        General
      </a>
    </Menu>
  );
};

