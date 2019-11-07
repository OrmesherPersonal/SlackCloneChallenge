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
import pic from './images/pic.png'
import "./styles/user-left.css";


export default props => {
  return (
    <Menu className="burger-button2">
      <a className="menu-item" id="user" href="/"> 
       Channels
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
