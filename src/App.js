import React, {Component} from 'react'
import './App.css'
import PlayerViewer from "./containers/PlayerViewer/PlayerViewer"
import {SongProvider} from "./contexts/Songs";



class App extends Component {
    render() {
        return (
            <SongProvider>
                <div className="App">
                    <PlayerViewer/>
                </div>
            </SongProvider>
        );
    }
}

export default App
