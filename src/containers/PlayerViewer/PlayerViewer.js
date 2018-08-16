import React, {Component} from 'react';
import Player from '../../components/Player/Player';
import './PlayerViewer.css';
import {withSongs} from "../../contexts/Songs";
import {SongProvider} from "../../contexts/Songs"
import PlayerSongsList from "../../components/Player/PlayerSongsList/PlayerSongsList";
import {withLayout} from "../../contexts/Layout";

class PlayerViewer extends Component {

    render() {
        return (
            <SongProvider>
                <PlayerSongsList show={this.props.isExpanded} playlistClose={this.props.playlistHideHandler}/>
                <Player
                    playlistShow={this.props.playlistShowHandler}
                    playlistClose={this.props.playlistHideHandler}>
                </Player>
            </SongProvider>
        )
    }

}

export default withLayout(withSongs(PlayerViewer))