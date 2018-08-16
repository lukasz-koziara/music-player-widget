import React from 'react';
import './Player.css';
import PlayerControls from '../../components/Player/PlayerControls/PlayerControls';
import PlayerRooster from "./PlayerRooster/PlayerRooster";
import {withSongs} from "../../contexts/Songs";





const Player = () => (

    <div className='PlayerLayout'>
        <div className='Player-Wrapper'>

            <PlayerRooster/>
            <PlayerControls/>
        </div>
    </div>


);

export default withSongs(Player);