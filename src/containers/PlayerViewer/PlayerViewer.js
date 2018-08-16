import React, {Component} from 'react';
import Player from '../../components/Player/Player';
import './PlayerViewer.css';
import PlayerSongsList from "../../components/Player/PlayerSongsList/PlayerSongsList";
import {withSongs} from "../../contexts/Songs";
import {SongProvider} from "../../contexts/Songs"

class PlayerViewer extends Component {

    state = {
        isExpanded: false
    }

    render() {
        return (
            <SongProvider>
                <PlayerSongsList show={this.state.isExpanded} playlistClose={this.playlistHideHandler}/>
                <Player
                    playlistShow={this.playlistShowHandler}
                    playlistOff={this.playlistHideHandler}>
                </Player>
            </SongProvider>
        )
    }

}

export default withSongs(PlayerViewer)