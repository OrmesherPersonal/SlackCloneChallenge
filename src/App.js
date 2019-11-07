import React from "react";
import './App.css';
import Login from './components/Login'
import Main from './components/Main'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import "./App.css";

function App() {
  return (
    <div>

      <BrowserRouter>
        <div>
     
          <Switch>
            <Route exact path="/" render={() => <Login title="12345" />} />
            <Route path="/Main" component={Main} />
          </Switch>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;