import React from 'react';
import './PlayerRooster.css'
import PlayerUpperBar from "../PlayerUpperBar/PlayerUpperBar";
import PlayerTitleBar from "../PlayerTitleBar/PlayerListTitleBar";

const playerRooster = () => (

    <div className={'PlayerRooster-SongBg'}>
        <PlayerUpperBar/>
        <PlayerTitleBar/>
    </div>

);

export default playerRooster
