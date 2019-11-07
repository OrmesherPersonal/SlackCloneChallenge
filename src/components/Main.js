import React, { Component } from 'react'
import './Main.css'
import SideBar from '../sidebar/Sidebar'
import SideBarLeft from '../sidebar/Sidebar-left'

class Main extends Component {
    render() {
        return (
            <div>

            <SideBarLeft />
                  <SideBar />
                <div className="app">
                    <main className="main">
                        <p>this is the page content</p>
                    </main>

                </div>
           
</div>
        )
    }
}

export default Main;