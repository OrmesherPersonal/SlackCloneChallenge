import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Main from './components/Main'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Sidebar from './components/SideBarLeft/SidebarLeft';



function App() {
  return (
    <div>

      <BrowserRouter>
        <div>
     
          <Switch>
            <Route exact path="/" render={() => <Main title="12345" />} />
            <Route path="/Main" component={Main} />
          </Switch>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
