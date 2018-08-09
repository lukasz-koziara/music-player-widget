import React from 'react';
import Helper from '../../hoc/Helper'
import Player from '../../components/Player/Player'
import PlayerSongList from '../../components/Player/PlayerSongsList/PlayerSongsList'
import './PlayerViewer.css'


class PlayerViewer extends React.Component {

    render() {
    return (
        <Helper>
        <Player/>

            <PlayerSongList/>

        </Helper>
    )
}

}

export default PlayerViewer