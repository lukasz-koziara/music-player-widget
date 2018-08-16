import React from 'react';
import './PlayerListTitleBar.css'
import {withSongs} from "../../../contexts/Songs";

const PlayerListTitleBar = () => (
    <div className='PlayerListTitleBar'>
        <p className="PlayerListTitleBar-SongAuthor"/>
        <p className="PlayerListTitleBar-SongTitle"/>
    </div>
);

export default withSongs(PlayerListTitleBar)