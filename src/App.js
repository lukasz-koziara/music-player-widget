import React, {Component} from 'react'
import './App.css'
import PlayerViewer from "./containers/PlayerViewer/PlayerViewer"
import {SongProvider} from "./contexts/Songs";
import {LayoutProvider} from "./contexts/Layout";



class App extends Component {
    render() {
        return (
            <LayoutProvider>
            <SongProvider>
                <div className="App">
                    <PlayerViewer/>
                </div>
            </SongProvider>
            </LayoutProvider>
        );
    }
}

export default App
