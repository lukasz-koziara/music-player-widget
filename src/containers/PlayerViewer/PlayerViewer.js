import React from 'react';
import Helper from '../../hoc/Helper'
import Player from '../../components/Player/Player'
import PlayerControls from '../../components/Player/PlayerControls/PlayerControls'
import PlayerSongList from '../../components/Player/PlayerSongsList/PlayerSongsList'

const  SONGS = {

}

class PlayerViewer extends React.Component {

    state = {
        songs: {

        }
    }

    render() {
    return (
        <Helper>
        <Player>
            <PlayerControls/>
            <PlayerSongList/>
        </Player>
        </Helper>
    )
}

}

export default PlayerViewer