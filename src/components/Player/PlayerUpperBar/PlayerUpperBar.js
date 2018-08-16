import React from 'react';
import './PlayerUpperBar.css';
import {withSongs} from "../../../contexts/Songs";


const PlayerUpperBar = (props) => (
    <div className='PlayerUpperBar-BarBg'>
        <button className='PlayerUpperBar-Repeat'></button>
        <button className='PlayerUpperBar-Shuffle'></button>
        <button className='PlayerUpperBar-Refresh'></button>
        <button className='fas fa-bars PlayerUpperBar-Menu' onClick={props.playlistShowHandler}></button>

    </div>
);

export default withSongs(PlayerUpperBar)