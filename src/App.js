import React, { Component } from "react";
import "./App.css";

import Game from "./Game/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>React Bejeweled initializeLevel branch</p>
        <Game />
      </div>
    );
  }
}

export default App;
