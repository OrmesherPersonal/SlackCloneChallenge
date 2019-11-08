import React, { Component } from 'react'
import './Main.css'
import SideBar from '../sidebar/Sidebar'
import ChannelSideBar from '../sidebar/ChannelSideBar'
// import SideBarLeft from '../sidebar/Sidebar-left'
import Messages from './Messages'

class Main extends Component {
    render() {
        return (
            <div>
                <ChannelSideBar />
                <SideBar />
                <div className="app">
                    <main className="main">
                        <p> <Messages /></p>
                    </main>

                </div>

            </div>
        )
    }
}

export default Main;