import React, { Component } from 'react'
import './App.css'
import PlayerViewer from "./containers/PlayerViewer/PlayerViewer"



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
