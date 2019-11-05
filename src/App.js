import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Main from './components/Main'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <div>

      <BrowserRouter>
        <div>
          {/* <Nav /> */}
     
          <Switch>
            {/* <Route exact path="/" render={() => <Main title="12345" />} />  */}
            {/* <Route path="/counter" component={Counter} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/addressbook" component={AddressBook} />
            <Route path="/todo" component={Todo} />  */}
            <Route exact path="/" render={() => <Login title="12345" />} />
            <Route path="/Main" component={Main} />
          </Switch>
        </div>

      </BrowserRouter>
      {/* 
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <Button />
          </header>
        </div>
      </div> */}

    </div>
  );
}

export default App;
