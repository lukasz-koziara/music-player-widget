import React from 'react';
import './Player.css';
import PlayerControls from '../../components/Player/PlayerControls/PlayerControls';
import PlayerRooster from "./PlayerRooster/PlayerRooster";
import PlayerSongsList from "./PlayerSongsList/PlayerSongsList";
import {withLayout} from "../../contexts/Layout";
import {withSongs} from "../../contexts/Songs";

const Player = () => (

    <div className='PlayerLayout'>
        <div className='Player-Wrapper'>
            <PlayerSongsList/>
            <PlayerRooster/>
            <PlayerControls/>
        </div>
    </div>


);

export default withLayout(withSongs(Player));