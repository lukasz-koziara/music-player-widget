import React from 'react';
import './PlayerRooster.css'
import PlayerUpperBar from "../PlayerUpperBar/PlayerUpperBar";
import PlayerTitleBar from "../PlayerTitleBar/PlayerTitleBar";

const playerRooster = () => (

    <div className={'SongBg'}>
        <PlayerUpperBar/>
        <PlayerTitleBar/>
    </div>

);

export default playerRooster
