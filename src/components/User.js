

//THIS IS THE BAR MENU OTHAT EMERGES FROM THE RIGHT OF THE APP THAT CONTAINS THE USER SETTINGS

import React from "react";
import { slide as Menu } from "react-burger-menu";
import { GoSmiley } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { GoMention } from "react-icons/go";
import { FaRegStar} from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { FaAddressBook} from "react-icons/fa";
import { MdPersonOutline} from "react-icons/md";
import { FaSlidersH} from "react-icons/fa";
// import avatar from './avatar.png' //this is a default avatar img
import pic from './images/pic.png'
import "./styles/user.css";


export default props => {
  return (
    <Menu right>
      <a className="menu-item" id="user" href="/"> <img className="avatar" src={pic}alt="avatar"></img>
        Fiona Murphy 
      </a>

      <a className="menu-item" id="status" href="/burgers"><GoSmiley className="icon" />
        Set a status
      </a>

      <a className="menu-item" id="donot" href="/donot"><FaRegBell className="icon"/>
        Do not distub
      </a>

      <a className="menu-item" id="activity" href="/activity"><GoMention className="icon"/>
        Activity
      </a>

      <a className="menu-item" id="starred" href="/starred"><FaRegStar className="icon"/>
        Starred items
      </a>

      <a className="menu-item" id="files" href="/files"><GiStack className="icon"/>
        Your files
      </a>

      <a className="menu-item" id="directory" href="/directory"><FaAddressBook className="icon"/>
        Directory
      </a>

      <a className="menu-item" id="profile" href="/profile"><MdPersonOutline className="icon"/>
        Edit profile
      </a>

      <a className="menu-item" id="settings" href="/settings"><FaSlidersH className="icon"/>
        Settings
      </a>
    </Menu>
  );
};

