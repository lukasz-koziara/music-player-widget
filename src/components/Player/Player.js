import React from 'react';
import './Player.css';
import PlayerControls from '../../components/Player/PlayerControls/PlayerControls';
import PlayerRooster from "./PlayerRooster/PlayerRooster";
import PlayerSongsList from "./PlayerSongsList/PlayerSongsList";


const player = () => (

    <div className='PlayerLayout'>
        <div className='Player-Wrapper'>
            <PlayerRooster/>
            <PlayerControls/>
            <PlayerSongsList/>
        </div>
    </div>


);

export default player;