import React, {Component} from 'react';
import Player from '../../components/Player/Player';
import './PlayerViewer.css';
import {withSongs} from "../../contexts/Songs";
import {SongProvider} from "../../contexts/Songs"
import PlayerSongsList from "../../components/Player/PlayerSongsList/PlayerSongsList";

class PlayerViewer extends Component {

    playlistShowHandler = () => {
        this.setState({isExpanded: true})
    };

    playlistHideHandler = () => {
        this.setState({isExpanded: false})
    };

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

export default withSongs(PlayerViewer)