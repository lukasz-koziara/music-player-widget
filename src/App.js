import React, { Component } from 'react'
import './App.css'
import PlayerViewer from "./containers/PlayerViewer/PlayerViewer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { faStepForward} from '@fortawesome/free-solid-svg-icons'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import { faPause} from '@fortawesome/free-solid-svg-icons'

library.add(faStepBackward, faStepForward, faPlay, faPause)

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerViewer />
      </div>
    );
  }
}

export default App;
