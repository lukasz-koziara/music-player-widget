import React, {Component} from 'react';
import Player from '../../components/Player/Player';
import './PlayerViewer.css';
import {withSongs} from "../../contexts/Songs";
import {SongProvider} from "../../contexts/Songs"
import PlayerSongsList from "../../components/Player/PlayerSongsList/PlayerSongsList";

class PlayerViewer extends Component {

    render() {
        return (
            <SongProvider>
                <PlayerSongsList show={this.state.isExpanded} playlistClose={this.playlistHideHandler}/>
                <Player
                    playlistShow={this.playlistShowHandler}
                    playlistClose={this.playlistHideHandler}>
                </Player>
            </SongProvider>
        )
    }

}

export default withSongs(PlayerViewer)