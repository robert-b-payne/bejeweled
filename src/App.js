import React, { Component } from "react";
import "./App.css";

import Game from "./Game/Game";
// import Frontloader from "./Frontloader/Frontloader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>React Bejeweled</p>
        <Game />
      </div>
    );
  }
}

export default App;
