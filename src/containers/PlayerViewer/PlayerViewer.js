import React from 'react';
import Helper from '../../hoc/Helper'
import Player from '../../components/Player/Player'
import './PlayerViewer.css'

class PlayerViewer extends React.Component {

    state = {
        isPaused: false
    };




    render() {
        return (
            <Helper>
                <Player/>
            </Helper>
        )
    }

}

export default PlayerViewer