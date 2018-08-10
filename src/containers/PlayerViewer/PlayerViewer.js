import React from 'react';
import Helper from '../../hoc/Helper'
import Player from '../../components/Player/Player'
import PlayerSongList from '../../components/Player/PlayerSongsList/PlayerSongsList'
import './PlayerViewer.css'


class PlayerViewer extends React.Component {

    state = {
        "songs": [
            {
                "title": "Still Don't Know",
                "artist": "Icona Pop",
                "duration": "3:16"
            },
            {
                "title": "I Love It ",
                "artist":"Icona Pop",
                "duration": "2:35"

            },
            {
                "title": "Girlfriend" ,
                "artist":"Icona Pop",
                "duration": "2:50"

            },
            {
                "title": "We Got The World",
                "artist":"Icona Pop",
                "duration": "3:07"

            },
            {
                "title": "Nights Like This",
                "artist":"Icona Pop",
                "duration": "3:24"
            }
        ],
        isPaused: false
    };

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