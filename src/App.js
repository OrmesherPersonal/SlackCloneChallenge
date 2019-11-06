import React from "react";
import ReactDOM from "react-dom";


import "./App.css";
import SideBar from './components/User';

function App() {
  return (
    <div id="App">
      <SideBar /> 

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
