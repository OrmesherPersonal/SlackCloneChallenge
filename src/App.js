import React from "react";
import ReactDOM from "react-dom";


import "./App.css";
import SideBar from './sidebar/Sidebar';

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
