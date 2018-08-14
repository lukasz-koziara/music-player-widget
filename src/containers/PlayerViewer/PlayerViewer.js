import React from 'react';
import Helper from '../../hoc/Helper'
import Player from '../../components/Player/Player'
import './PlayerViewer.css'
import PlayerSongsList from "../../components/Player/PlayerSongsList/PlayerSongsList";
import {withSongs} from "../../contexts/Songs";

class PlayerViewer extends React.Component {

    state = {
        isPaused: false,
        playlistOff: true
    };

    tooglePlaylist() {
        this.setState({
            plalistOff: !this.state.playlistOff
        })
    }


    render() {
        return (
            <Helper>
                <Player
                    playlistOn={this.playlistShowHandler}
                    playlistOff={this.playlistHideHandler}
                />
                <PlayerSongsList show={this.state.playlistOn} playlistClose={this.playlistHideHandler}/>
            </Helper>
        )
    }

}

export default withSongs(PlayerViewer)