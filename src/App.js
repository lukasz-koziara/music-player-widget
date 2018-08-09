import React, { Component } from 'react'
import './App.css'
import Player from './components/Player/Player'
import PlayerViewer from "./containers/PlayerViewer/PlayerViewer"
import PlayerControls from "./components/Player/PlayerControls/PlayerControls";


class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerViewer/>
      </div>
    );
  }
}

export default App;
